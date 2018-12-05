import React from 'react';
import PropTypes from 'prop-types';

import profileIcon from '../../assets/profile.svg';
import styles from './style.scss';

const Photo = ({ alt, photoUrl }) => (
  <img src={ photoUrl || profileIcon } alt={ alt || 'Profile Picture' } className={ styles.photo } />
);

Photo.propTypes = {
  alt: PropTypes.string,
  photoUrl: PropTypes.string
};

export default Photo;
