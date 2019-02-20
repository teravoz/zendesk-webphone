import React, { createRef, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';

class Dialform extends Component {

  componentDidMount() {
    if (!this.props.reference || this.props.disabled) {
      return;
    }

    this.props.reference.current.focus();
  }

  componentDidUpdate() {
    if (!this.props.reference || this.props.disabled) {
      return;
    }


    this.props.reference.current.focus();
    setTimeout(() => {
      this.props.reference.current.setSelectionRange(this.props.cursor, this.props.cursor);
    }, 0);

  }
  
  render() {
    return (
      <div className={ classnames(styles.dialform__form, this.props.classes) }>
        <div className={ styles.dialform__form__item }>
          <input
            onSelect={ this.props.onSelect }
            value={ this.props.value }
            disabled={ this.props.disabled }
            onKeyDown={ this.props.handler }
            className={ styles.dialform__form__item__number }
            type="text"
            onChange={ this.onChange }
            onPaste={ this.props.onPaste }
            onCut={ this.props.onCut }
            ref={ this.props.reference }
            placeholder={ this.props.placeholder || 'Insira o número' } />
        </div>
      </div>
    );
  }
}

Dialform.propTypes = {
  visible: PropTypes.bool,
  classes: PropTypes.string,
  handler: PropTypes.func,
  disabled: PropTypes.bool,
  onPaste: PropTypes.func,
  onCut: PropTypes.func,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  reference: PropTypes.node,
  cursor: PropTypes.number
};

export default Dialform;

