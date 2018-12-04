import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import profileIcon from '../../assets/profile.svg';

const Profile = ({ name, email, tags, photo, dark }) => {

    let center = '';
    if (tags && tags.length > 0) {
      center = styles.center;
    }
    let theme = {
      single: styles.profile__info__tags__single,
      title: styles.profile__info__tags__title
    };
    if (dark) {
      theme.single = styles.profile__info__tags__single + ' ' + styles.profile__info__tags__single__dark;
      theme.title = styles.profile__info__tags__title  + ' ' + styles.profile__info__tags__title__dark;
    }

    return (
      <div className={ styles.profile + ' ' + center }>
        <img src={ photo || profileIcon } alt="callee-profile" className={ styles.profile__img } />
        <div className={ styles.profile__info } >
          <span className={ styles.profile__info__name } > { name || 'Unknown' } </span>
          <span className={ styles.profile__info__email } > { email || 'No e-mail' }</span>
          {
            tags && tags.length > 0 ?
            (
            <div className={ styles.profile__info__tags }>
              <span className={ theme.title }>Tags:</span>
              {
                tags.map((t, i) => {
                  t = t.length > 15 ? `${t.substring(0, 15).trim()}...`  : t;
                  return (<span key={ i } className={ theme.single } > { t } </span>)
                })
              }
            </div>
            ) : null
          }
        </div>
      </div>
    );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  photo: PropTypes.string,
  dark: PropTypes.bool
}

export default Profile;
