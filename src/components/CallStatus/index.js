import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const CallStatus = (props) => {

    let colors = [];
    let texts = [];
    switch(props.status) {
      case 'ongoing':
        colors = [];
        colors[0] = styles.callstatus__green;
        texts[0] = 'em ligação';
        break;
      case 'waiting':
        colors = [];
        colors[0] = styles.callstatus__black;
        texts[0] = 'tempo em espera';
        break;
      default:
        colors = [];
        colors[0] = styles.callstatus__black;
        texts[0] = 'tempo em espera';
        break;
    }

    if (props.action && props.status == 'ongoing') {
      colors[1] = styles.callstatus__grey;
      texts[1] = props.action && props.action.length > 0 && `(${props.action})`;
    }

    return (
      <div className={ styles.callstatus }>
       {
         colors.length == 2 ?
          (
            <div className={ styles.callstatus__vertical }>
              <span className={ colors[0] }> { texts[0] } </span>
              <span className={ colors[1] }> { (texts[1]) } </span>
            </div>
          ) : <span className={ colors[0] }> { texts[0] } </span>
       }
      </div>
    );
}

CallStatus.propTypes = {
  status: PropTypes.string.isRequired,
  action: PropTypes.array
}

export default CallStatus;
