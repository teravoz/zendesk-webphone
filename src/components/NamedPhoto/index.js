import React from 'react';
import PropTypes from 'prop-types';

import Photo from '../Photo';
import styles from './style.scss';

const NamedPhoto = (props) => {
  return (
    <div className={ styles.namedphoto }>
      <Photo { ...props} />
      <span> { props.name } </span>
    </div>
  );
}

NamedPhoto.propTypes = {
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string
};

export default NamedPhoto;
