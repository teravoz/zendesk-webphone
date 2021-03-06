
import React from 'react';
import PropTypes from 'prop-types';

const DoubleArrowIcon = (props) => {
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11">
        <g fill="none" fillRule="evenodd">
            <path fill="#1C8FC7" fillRule="nonzero" d="M1.557.442L5 3.877 8.443.443 9.5 1.5 5 6 .5 1.5 1.557.442zm0 5L5 8.877l3.442-3.434L9.5 6.5 5 11 .5 6.5l1.057-1.057z"/>
            <path d="M14-6v18H-4V-6z"/>
            <g>
                <path d="M14-1v18H-4V-1z"/>
            </g>
        </g>
    </svg>
  );
}

DoubleArrowIcon.propTypes = {
  styles: PropTypes.string
};

export default DoubleArrowIcon;
