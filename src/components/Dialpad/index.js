import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';
import Dialform from '../Dialform';
import Keyboard from '../Keyboard';

class Dialpad extends Component {

  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.selection = '';
  }

  propDefaults = {
    readOnly: false
  }

  state = {
    value: '',
    cursor: 0,
  }

  isValidChar(key) {
    switch (key) {
      case '#':
      case '*':
      case '+':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case 'Enter':
      case 'Backspace':
      case 'Delete':
        return true;
      default:
        return false;
    }
  }

  setNumber(key) {
    const valid = this.isValidChar(key);
    if (valid) {
      let value = '';
      let input = this.textInput.current;
      if (key === 'Enter') {
        if (this.state.value.length > 0) {
          this.props.onEnterPressed();
        }
        return;
      } else {
        if (input.selectionStart == 0) {
          value = this.state.value + key;
        } else {
          const first = this.state.value.substring(0, input.selectionStart);
          const last = this.state.value.substring(first.length, this.state.value.length);

          value = first + key + last
        }
      }

      this.props.onValueChanged && this.props.onValueChanged(value, key);
      this.setState({ value, cursor: input.selectionStart + 1 });
    }
  }

  setNumberByCursor(event) {
    const { key, target: { selectionStart, selectionEnd } } = event;

    const valid = this.isValidChar(key);
    if (valid) {
      let value = '';
      let cursor = 0;
      if (key === 'Enter') {
        if (this.state.value.length > 0) {
          this.props.onEnterPressed();
        }
        return;
      } else if (key === 'Backspace') {
        if (this.selection) {
          const state = this.onSelectDelete(this.state.value);
          cursor = state.cursor;
          value = state.value;
        } else {
          const length = this.state.value.length;

          const start = this.state.value.substring(0, selectionStart - 1);
          const end = this.state.value.substring(selectionStart, length);

          value = start + end;
          if (selectionStart == 0) {
            cursor = selectionStart;
          } else {
            cursor = selectionStart - 1;
          }
        }
      } else if (key === 'Delete') {
        if (this.selection) {
          const state = this.onSelectDelete(this.state.value);
          cursor = state.cursor;
          value = state.value;
        } else {
          const length = this.state.value.length;

          const start = this.state.value.substring(0, selectionStart);
          const end = this.state.value.substring(selectionStart + 1, length);

          value = start + end;
          cursor = selectionEnd;
        }
      } else {
        if (this.selection) {
          const state = this.onSelectInsert(this.state.value, key);
          value = state.value;
          cursor = state.cursor;
        } else {
          const length = this.state.value.length;

          const start = this.state.value.substring(0, selectionStart);
          const end = this.state.value.substring(start.length, length);

          value = start + key + end;
          cursor = selectionStart + 1;
        }
      }

      this.props.onValueChanged && this.props.onValueChanged(value, key);
      this.setState({ value, cursor });
    }
  }

  onTextChanged(e) {
    this.setNumberByCursor(e);
  }

  setNumberOnPaste = (cursor, value, key) => {
    if (cursor == 0) {
      value = this.state.value + key;
    } else {
      const first = this.state.value.substring(0, cursor);
      const last = this.state.value.substring(first.length, this.state.value.length);

      value = first + key + last;
    }

    this.props.onValueChanged && this.props.onValueChanged(value, key);
    this.setState({ value, cursor });
  }

  onPaste = (e) => {
    const cursor = e.target.selectionStart;
    e.clipboardData.items[0] && e.clipboardData.items[0].getAsString((text) => {
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => this.setNumberOnPaste(cursor, this.state.value, text.charAt(i)), 25 * i);
      }
    })
  }

  onCut = (e) => {
    if (this.selection) {
      let { start, end } = this.selection;
      this.toClipboard(this.selection.value);
      const length = this.state.value.length;

      const first = this.state.value.substring(0, start);
      const last = this.state.value.substring(end, length);

      const value = first + last;
      this.setState({ value, cursor: start });
    } else {
      this.toClipboard(this.state.value);
      this.setState({ value: '' });
    }
  }

  onSelectInsert = (value, key) => {
    let { start, end } = this.selection;
    const length = value.length;

    const first = value.substring(0, start);
    const last = value.substring(end, length);

    return { value: first + key + last, cursor: start + 1 };
  }

  onSelectDelete = (value) => {
    let { start, end } = this.selection;
    const length = value.length;

    const first = value.substring(0, start);
    const last = value.substring(end, length);

    return { value: first + last, cursor: start };
  }

  onSelect = (e) => {
    const value = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    if (value) {
      this.selection = {
        value,
        start: e.target.selectionStart,
        end: e.target.selectionEnd
      };
    } else {
      this.selection = null;
    }
  }

  toClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => console.debug('Async: Copying to clipboard was successful!'))
      .catch((error) => console.debug('Async: Could not copy text: ', error));
  }

  onKeyPress = (value) => (e) => {
    this.setNumber(value);
  }

  render() {
    const { placeholder, readOnly, classes } = this.props;
    const { value } = this.state;
    return (
      <Fragment>
        <Dialform
          disabled={readOnly}
          classes={classes}
          handler={this.onTextChanged.bind(this)}
          onPaste={this.onPaste}
          onCut={this.onCut}
          onSelect={this.onSelect}
          placeholder={placeholder}
          value={value}
          visible={true}
          reference={this.textInput}
          cursor={this.state.cursor}
        />
        <Keyboard classes={styles.mt25} onClick={this.onKeyPress} visible={true} />
      </Fragment>
    );
  }
}

Dialpad.propTypes = {
  readOnly: PropTypes.bool,
  onValueChanged: PropTypes.func,
  onEnterPressed: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  classes: PropTypes.string
};

export default Dialpad;

