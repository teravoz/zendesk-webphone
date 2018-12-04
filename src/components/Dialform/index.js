import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';

const Dialform = (props) => {
  return (
    <div className={ classnames(styles.dialform__form, props.classes) }>
      <div className={ styles.dialform__form__item }>
        <input
          value={ props.value }
          disabled={ props.disabled }
          onKeyDown={ props.handler }
          className={ styles.dialform__form__item__number }
          type="text"
          placeholder={ props.placeholder || 'Insira o número' } />
      </div>
    </div>
  );
}

Dialform.propTypes = {
  visible: PropTypes.bool.isRequired,
  classes: PropTypes.string,
  handler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.number,
};

export default Dialform;

