import React from 'react';
import PropTypes from 'prop-types';

import profileIcon from '../../assets/profile.svg';
import styles from './style.scss';

const Picture = (props) => {
  return (
    <div className={ styles.picture }>
      <img src={ props.photo || profileIcon } alt="caller-profile" className={ styles.picture__img } />
      { props.name ? <span> { props.name } </span> : null }
    </div>
  );
}

Picture.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
};


export default Picture;