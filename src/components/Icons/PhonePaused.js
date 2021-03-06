import React from 'react';
import PropTypes from 'prop-types';

const PhonePausedIcon = (props) => {
  
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path fill={ props.color || "#787878" } fillRule="nonzero" d="M12.444 0h-1.777v6.222h1.777V0zm2.667 11.111c-1.067 0-2.133-.178-3.2-.533-.267-.09-.622 0-.889.178L9.067 12.71C6.577 11.467 4.533 9.333 3.2 6.844L5.156 4.89c.266-.267.355-.622.177-.889-.266-.978-.444-2.044-.444-3.111C4.889.356 4.533 0 4 0H.889C.356 0 0 .356 0 .889 0 9.244 6.756 16 15.111 16c.533 0 .889-.356.889-.889V12c0-.533-.356-.889-.889-.889zM14.222 0v6.222H16V0h-1.778z"/>
    </svg>
  );
}

PhonePausedIcon.propTypes = {
  styles: PropTypes.string,
  color: PropTypes.string
};

export default PhonePausedIcon;
