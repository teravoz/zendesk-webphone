import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import * as callingAnimation from '../../assets/calling-lottie.json';
import { setAppHeight, changePage } from '../../actions/settings';
import { changeStatus, endCall } from '../../actions/call';

import styles from './style.scss';
import Dialform from '../../components/Dialform/index.js';
import Button from '../../components/Button/index.js';
import HangupIcon from '../../components/Icons/Hangup';
import NamedPhoto from '../../components/NamedPhoto/index.js';


const mapStateToProps = ({ call, profile, teravoz, devices }) => ({
  call,
  profile,
  teravoz,
  devices
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changePage, changeStatus, endCall }, dispatch),
  setAppHeight: () => dispatch(setAppHeight(310))
});

class Calling extends Component {

  constructor(props) {
    super(props);

    this.callingSound = React.createRef();
  }

  state = {
    animation: {
      stopped: false,
      paused: false
    },
    sinkId: false
  }

  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: callingAnimation.default,
    rendererSettings: {
      className: styles.calling_lottie,
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  componentWillMount() {
    this.props.setAppHeight();
  }

  componentDidMount() {
    const { teravoz, changePage, changeStatus } = this.props;

    // Setting the ringing audio defaults;
    teravoz.events.once('hangUp', this.clear);
    teravoz.events.once('cleanup', this.clear);
    teravoz.events.once('acceptedCall', () => {
      setTimeout(() => {
        changeStatus('ongoing');
        changePage('ongoing-call');
      }, 500);
    });
    teravoz.events.once('earlyMedia', () => {
      setTimeout(() => changeStatus('calling'), 500);
    });

    const { currentOutput } = this.props.devices;

    if (this.callingSound && this.callingSound.current) {
      this.callingSound.current.volume = 1;

      if (this.callingSound.current.sinkId === currentOutput.deviceId 
          || (!this.callingSound.current.sinkId && currentOutput.deviceId === 'default')) {
        return;
      }

      this.callingSound.current.setSinkId(currentOutput.deviceId)
        .then(() => {
          console.debug(`Successfuly set the output device ${currentOutput.label} - ${currentOutput.deviceId} to calling sound.`)
          this.setState({ sinkId: true });
        })
        .catch((error) => {
          console.debug(`Failed to set the output device ${currentOutput.label} - ${currentOutput.deviceId} to the calling sound : ${error.message}`)
        });
    }
  }

  clear = () => {
    const { changePage, endCall } = this.props;
    setTimeout(() => {
      changePage('dialing');
      endCall();
    }, 100);
  }

  hangup = () => {
    this.props.teravoz.hangUp();
  }

  renderPictures() {
    const { profile: { photo, name } } = this.props;
    return (
      <div className={ styles.callingperson }>
        <NamedPhoto name="Teravoz" />
        <div className={ styles.callingperson__profile__animation }>
          <Lottie
            options={ this.defaultOptions }
            height={ 80 }
            width={ 100 }
            isStopped={ this.state.animation.stopped }
            isPaused={ this.state.animation.paused }
          />
          <span> Chamando </span>
        </div>
        <NamedPhoto name={ name || 'Unknown' } photoUrl={ photo }/>
      </div>
    );
  }

  render() { 
    return (
      <div className={ styles.calling }>
        { this.props.call.status === 'dialing' ?
          <audio autoPlay={true} loop={true} src={`${process.env.SOUND_BASE_PATH}/calling.mp3`} className={styles.callingperson__hidden} ref={this.callingSound} /> 
          : null
        }
        <Dialform classes={ styles.mt30 } value={ this.props.call.number } disabled={ true } />
        { this.renderPictures() }
        <div className={ classnames(styles.calling__button, styles.mt30) }>
          <Button
            transparent={ true }
            medium={ true }
            red={ true }
            label="Cancelar"
            onClick={ this.hangup }
            icon={ <HangupIcon color='#d6002b' /> }
          />
        </div>
      </div>
    );
  }
}

Calling.propTypes = {
  action: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calling);
