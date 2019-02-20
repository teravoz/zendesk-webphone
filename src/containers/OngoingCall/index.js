import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { setAppHeight, getTones } from '../../actions/settings'
import { changeStatus, endCall, toggleHold, toggleMute } from '../../actions/call';
import styles from './style.scss';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';
import CallStatus from '../../components/CallStatus';
import Timer from '../../components/Timer';
import Dialpad from '../../components/Dialpad';
import Toolbox from '../../components/Toolbox';
import ToolboxItem from '../../components/ToolboxItem';
import MicrophoneIcon from '../../components/Icons/Microphone';
import PhonePausedIcon from '../../components/Icons/PhonePaused';
import VDivider from '../../components/VDivider';

const mapStateToProps = ({ call, profile, teravoz, devices, settings }) => ({
  call,
  profile,
  teravoz,
  devices,
  settings
});

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (...args) => dispatch(changeStatus(...args)),
  endCall: () => dispatch(endCall),
  toggleHold: () => dispatch(toggleHold()),
  toggleMute: () => dispatch(toggleMute()),
  setAppHeight: () => dispatch(setAppHeight(610)),
  getTones: (refs) => dispatch(getTones(refs))
});

class OngoingCall extends Component {

  references = {}

  componentWillMount() {
    this.props.setAppHeight();
  }

  componentDidMount() {
    this.props.getTones(this.references);
  }

  createRef(name) {
    this.references[name] = React.createRef();

    return this.references[name];
  }

  onValueChanged = (value, key) => {
    if (key !== 'Backspace' && key !== 'Enter' && key !== 'Delete') {
      if (this.props.settings.tones) {
        this.props.settings.tones[key].play();
      }
    }
    
    setTimeout(() => this.props.teravoz.sendDTMF(key), 700);
  }

  onHangUpClick = () => {
    this.props.teravoz.hangUp();
  }

  onHoldClick = () => {
    this.props.toggleHold();
  }

  onMuteClick = () => {
    this.props.toggleMute();
  }

  renderAudio = () => {
    return (
      <Fragment> 
        <audio className={styles.ongoing__hidden} ref={this.createRef('0')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('1')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('2')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('3')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('4')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('5')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('6')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('7')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('8')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('9')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('#')}></audio>
        <audio className={styles.ongoing__hidden} ref={this.createRef('*')}></audio>
      </Fragment>
    );
  }

  getControlStatuses() {
    const { controls } = this.props.call;
    const callStatuses = [];
    if (controls.mute) {
      callStatuses.push('MUDO');
    }
    if (controls.hold) {
      callStatuses.push('PAUSADO');
    }
    return callStatuses;
  }

  render() {

    const { call, profile } = this.props;
    const { controls } = call;

    return (
      <div className={ styles.ongoing }>
        <Profile { ...profile } />
        <CallButtons
          buttonSuccessLabel="Aceitar"
          buttonSuccessTheme="disabled"
          buttonRejectLabel="Desligar"
          buttonRejectClick={ this.onHangUpClick }>
          <div className={ styles.ongoing__fixed }>
            <CallStatus status="ongoing" action={ this.getControlStatuses() } />
            <Timer classes={ styles.mt5 } />
          </div>
        </CallButtons>

        <Toolbox classes={ classNames(styles.mt30, styles.mb30) }>
          <ToolboxItem icon={ MicrophoneIcon } label="Mute" onClick={ this.onMuteClick } disabled={ controls.mute } /> <VDivider />
          <ToolboxItem icon={ PhonePausedIcon } label="Pausar" onClick={ this.onHoldClick } disabled={ controls.hold } />
        </Toolbox>

        <Dialpad
          onValueChanged={ this.onValueChanged }
          onEnterPressed={ this.onCall }
        />

        { this.renderAudio() }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OngoingCall);

