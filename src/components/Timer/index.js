import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Timer extends React.Component {

  state = {
    interval: null,
    time: ''
  }

  elapsedTime = 0;

  addPadding(num) {
    return (num < 10 ? '0' : '') + num;
  }

  getElapsedTime(secs) {
    const hours = Math.floor(secs / 3600);
    secs = secs % 3600;
    const minutes = Math.floor(secs / 60);
    secs = secs % 60;
    const seconds = Math.floor(secs);

    const currentTimeString = this.addPadding(hours) + ":" + this.addPadding(minutes) + ":" + this.addPadding(seconds);

    return currentTimeString;
  }

  componentWillMount() {
    const interval = setInterval(() => {
      this.elapsedTime++;
      this.setState({ time: this.getElapsedTime(this.elapsedTime) });
    }, 1000);

    this.setState({ interval });
  }

  componentWillUnmount() {
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
  }

  render() {
    return (
      <div className={ this.props.classes ? this.props.classes + ' ' + styles.timer : styles.timer }>
        <span className={ styles.timer }> { this.state.time } </span>
      </div>
    );
  }
}

Timer.propTypes = {
  classes: PropTypes.string
}

export default Timer;
