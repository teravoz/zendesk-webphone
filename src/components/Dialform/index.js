import React, { createRef, Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';

class Dialform extends Component{

  constructor(props) {
    super(props);
    this.textInput = createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }
  componentDidUpdate() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div className={ classnames(styles.dialform__form, this.props.classes) }>
        <div className={ styles.dialform__form__item }>
          <input
            value={ this.props.value }
            disabled={ this.props.disabled }
            onKeyDown={ this.props.handler }
            className={ styles.dialform__form__item__number }
            type="text"
            onPaste={ this.props.onPaste }
            onCut={ this.props.onCut }
            ref={ this.textInput }
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
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Dialform;

