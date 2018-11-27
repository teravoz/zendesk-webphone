import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const CallTimer = (props) => {
    return (
      <div className={ props.classes ? props.classes + ' ' + styles.calltimer : styles.calltimer }>
        <span className={ styles.calltimer__timer }> { props.time } </span>
        { props.destination ? <span className={ styles.calltimer__destination }> { props.destination }</span> : null }
      </div>
    );
}

CallTimer.propTypes = {
  time: PropTypes.string.isRequired,
  destination: PropTypes.string,
  classes: PropTypes.string
}

export default CallTimer;
