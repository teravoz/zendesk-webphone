import React from 'react';
import styles from './style.scss';
import logo from '../../assets/teralogo.svg';

const Footer = ({ props }) => {
    return (
      <div className={ styles.footer }>
        <img src={ logo } alt="profile" className={ styles.footer__img } />
        <div>|</div>
        <span>web<b>phone</b></span>
      </div>
    );
}

export default Footer;
