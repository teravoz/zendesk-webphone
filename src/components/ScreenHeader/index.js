import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Arrow from '../Icons/BackArrow';
import CloseIcon from '../Icons/CloseIcon';
import styles from './style.scss';

const ScreenHeader = ({ close, navigate, title }) => (
  <Fragment>
    <div className={styles.screen_header}>
      <button onClick={navigate} className={styles.screen_header__back_button}>
        <Arrow />
      </button>
      <h1 className={styles.screen_header__title} alt={title}>{title}</h1>
      <button onClick={close} className={styles.screen_header__close_button}>
        <CloseIcon />
      </button>
    </div>
  </Fragment>
)

ScreenHeader.propTypes = {
  close: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default ScreenHeader;