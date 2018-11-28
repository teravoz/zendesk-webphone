import React from 'react';
import PropTypes from 'prop-types';

const MicrophoneIcon = (props) => {
  return (
    <svg className={ props.styles } xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18">
        <defs>
            <path id="a" d="M0 0h16v17.185H0z"/>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <mask id="b" fill="#fff">
                <use href="#a"/>
            </mask>
            <path fill="#787878" d="M14.222 8.296h-1.439c0 .651-.17 1.296-.339 1.852l1.013 1.111c.51-.836.765-1.852.765-2.963zM10.667 8.889V2.897C10.667 1.255 9.508 0 7.997 0c-1.51 0-2.664 1.255-2.664 2.897v.194l5.334 5.798zM1.197 1.185L0 2.34l5.533 5.335v.62c0 1.511 1.197 2.67 2.763 2.67.185 0 .37 0 .65-.09l1.565 1.51c-.647.268-1.382.446-2.12.446-2.584 0-4.889-1.866-4.889-4.536H1.846c0 3.026 2.49 5.513 5.527 5.956v2.934H9.22v-2.934c.829-.087 1.661-.443 2.305-.799l3.871 3.733 1.198-1.154L1.197 1.185z" mask="url(#b)"/>
        </g>
    </svg>
  );
}

MicrophoneIcon.propTypes = {
  styles: PropTypes.string
};

export default MicrophoneIcon;
