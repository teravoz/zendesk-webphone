import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';
import HangupIcon from '../../components/Icons/Hangup';
import AcceptIcon from '../../components/Icons/Accept';


  /* We are figuring out how to better provide the data below
    <div className={ styles.incoming__info }>
      <CallStatus status="waiting" />
      <CallTimer classes={ styles.mt7 } time="00:10:01" destination="Comercial" />
    </div>
  */


const CallButtons = (props) => {

  let center = '';
  if (props.children) {
    center = styles.center;
  }

  let successTheme = {};
  if  (props.buttonSuccessTheme == 'disabled') {
    successTheme.text = styles.callbutton__text__disabled;
    successTheme.icon = styles.callbutton__icon__disabled__acc;
  } else {
    successTheme.text = styles.callbutton__text__accept;
    successTheme.icon = styles.callbutton__icon__accept;
  }

  return (
    <div className={ styles.callbutton + ' ' + center }>
      <div className={ styles.callbutton__item }>
        <div onClick={ props.buttonSuccessClick } className={ styles.callbutton__icon + ' ' + successTheme.icon }>
          <AcceptIcon />
        </div>
        <span className={ styles.callbutton__text + ' ' + successTheme.text }>
          { props.buttonSuccessLabel }
        </span>
      </div>
      { props.children ? props.children : null }
      <div className={ styles.callbutton__item }>
        <div onClick={ props.buttonRejectClick } className={ styles.callbutton__icon + ' ' + styles.callbutton__icon__decline } >
          <HangupIcon />
        </div>
        <span className={ styles.callbutton__text + ' ' + styles.callbutton__text__decline }>
        { props.buttonRejectLabel }
        </span>
      </div>
    </div>
  );
}

CallButtons.propTypes = {
  buttonSuccessLabel: PropTypes.string.isRequired,
  buttonSuccessTheme: PropTypes.string,
  buttonSuccessClick: PropTypes.func.isRequired,
  buttonRejectLabel: PropTypes.string.isRequired,
  buttonRejectTheme: PropTypes.string,
  buttonRejectClick: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default CallButtons;
