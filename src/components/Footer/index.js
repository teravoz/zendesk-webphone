import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';
import logo from '../../assets/teralogo.svg';

const Footer = (props) => {
  return (
    <div className={ classnames(styles.footer, { [styles.footer__space__between]: !props.hideLogout }) }>
      {
         props.hideLogout ? null :
        <span onClick={ props.onClick }>Sair  </span>
      }
      <img src={ logo } alt="profile" className={ styles.footer__img } />
    </div>
  );
}

Footer.propTypes = {
  onClick: PropTypes.func,
  hideLogout: PropTypes.bool
};

export default Footer;
