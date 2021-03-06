import React from 'react';
import PropTypes from 'prop-types';

const TransferIcon = (props) => {
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path fill={ props.color || '#787878' } fillRule="nonzero" d="M12 8l4-4-4-4v2.4H8.8v3.2H12V8zm1.6 3.6c-.96 0-1.92-.16-2.88-.48-.24-.08-.56 0-.8.16l-1.76 1.76C5.92 11.92 4.08 10 2.88 7.76L4.64 6c.24-.24.32-.56.16-.8-.24-.88-.4-1.84-.4-2.8 0-.48-.32-.8-.8-.8H.8c-.48 0-.8.32-.8.8C0 9.92 6.08 16 13.6 16c.48 0 .8-.32.8-.8v-2.8c0-.48-.32-.8-.8-.8z"/>
    </svg>
  );
}

TransferIcon.propTypes = {
  styles: PropTypes.string,
  color: PropTypes.string
};

export default TransferIcon;
