import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import countryCodes from '../../misc/country-codes';
import styles from './style.scss';
import Select from '../Select';


const Dialform = (props) => {
  return (
    <div className={ classnames(styles.dialform__form, props.classes) }>
      <div className={ styles.dialform__form__item }>
        <input value={ props.defaultNumberValue } disabled={ props.disabled } onKeyDown={ props.numberHandler } className={ styles.dialform__form__item__number } type="text" placeholder="Insira o número" />
      </div>
    </div>
  );
}

Dialform.propTypes = {
  visible: PropTypes.bool.isRequired,
  classes: PropTypes.string,
  numberHandler: PropTypes.func.isRequired,
  countryCodeHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  defaultNumberValue: PropTypes.number,
  defaultCountryValue: PropTypes.number
};

export default Dialform;

