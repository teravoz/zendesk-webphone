import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';
import logo from '../../assets/teralogo.svg';
import SettingsIcon from '../../components/Icons/Settings';
import Button from '../Button';


const Footer = (props) => (
  <div className={classnames(styles.footer, { [styles.footer__space__between]: !props.hideLogout })}>
    <div className={styles.footer__group}>
      {
        props.hideLogout ? (null) :
          (<span onClick={props.onClick}>Sair  </span>)
      }
      { props.configVisible ? (<Button onClick={props.toggle} classes={classnames(styles.footer__bt_settings, 
        { [styles.footer__bt_settings__pressed]: props.pressed })}>
        <SettingsIcon />
      </Button>) : null
      }
    </div>
    <img src={logo} alt='profile' className={styles.footer__img} />
  </div>
);

Footer.propTypes = {
  onClick: PropTypes.func,
  hideLogout: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  pressed: PropTypes.bool.isRequired,
  configVisible: PropTypes.bool.isRequired
};

export default Footer;


