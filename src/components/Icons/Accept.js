import React from 'react';
import PropTypes from 'prop-types';

const AcceptIcon = (props) => {
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16">
        <path fill="#FFF" fill-rule="evenodd" d="M15.928 12.756l-.08-.243c-.187-.559-.805-1.142-1.374-1.299l-2.103-.574c-.57-.155-1.382.053-1.8.472l-.76.76a8.076 8.076 0 0 1-5.679-5.68l.76-.761c.417-.417.626-1.23.471-1.8L4.79 1.526C4.636.958 4.05.34 3.49.152l-.24-.08c-.56-.187-1.36.002-1.777.42L.334 1.633c-.203.201-.333.78-.333.781a13.458 13.458 0 0 0 3.933 9.654 13.438 13.438 0 0 0 9.62 3.932c.019 0 .614-.126.817-.33l1.139-1.138c.417-.415.604-1.216.418-1.775"/>
    </svg>
  );
}

AcceptIcon.propTypes = {
  styles: PropTypes.string
};

export default AcceptIcon;
