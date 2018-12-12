import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Photo from '../Photo';
import styles from './style.scss';

const Profile = ({ name, email, tags, photo, dark }) => {

    let theme = {
      single: styles.profile__info__tags__single,
      title: styles.profile__info__tags__title
    };
    if (dark) {
      theme.single = classnames(styles.profile__info__tags__single, styles.profile__info__tags__single__dark);
      theme.title = classnames(styles.profile__info__tags__title, styles.profile__info__tags__title__dark);
    }

    return (
      <div className={ classnames(styles.profile, { [styles.center]: tags && tags.length > 0 }) }>
        <Photo photoUrl={ photo } />
        <div className={ classnames(styles.profile__info, { [styles.vcenter]: !tags || tags.length == 0 }) } >
          <span className={ styles.profile__info__name } > { name || 'Desconhecido' } </span>
          <span className={ styles.profile__info__email } > { email || 'Nenhum e-mail encontrado' }</span>
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
