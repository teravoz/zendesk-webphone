import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setAppHeight } from '../../actions/settings'
import { changeStatus, endCall, toggleKeyboard, toggleHold, toggleMute } from '../../actions/call';
import styles from './style.scss';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';
import CallStatus from '../../components/CallStatus';
import Timer from '../../components/Timer';
import DoubleArrowIcon from '../../components/Icons/DoubleArrow';
import Toolbox from '../../components/Toolbox';
import ToolboxItem from '../../components/ToolboxItem';
import KeyboardIcon from '../../components/Icons/KeyboardIcon';
import MicrophoneIcon from '../../components/Icons/Microphone';
import PhonePausedIcon from '../../components/Icons/PhonePaused';
import TransferIcon from '../../components/Icons/Transfer';
import VDivider from '../../components/VDivider';

const mapStateToProps = ({ call, profile, teravoz }) => ({
  call,
  profile,
  teravoz
});

const mapDispatchToProps = (dispatch) => ({
  changeStatus: (...args) => dispatch(changeStatus(...args)),
  endCall: () => dispatch(endCall),
  toggleKeyboard: () => dispatch(toggleKeyboard()),
  toggleHold: () => dispatch(toggleHold()),
  toggleMute: () => dispatch(toggleMute()),
  setAppHeight
});

class OngoingCall extends Component {

  componentWillMount() {
    this.props.setAppHeight(290);
  }

  onHangUpClick = () => {
    this.props.teravoz.hangup();
  }

  onKeyboardClick = () => {
    console.log('open keyboard');
  }

  onHoldClick = () => {
    this.props.toggleHold();
  }

  onMuteClick = () => {
    this.props.toggleMute();
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

        <Toolbox classes={ styles.mt15 }>
          <ToolboxItem icon={ KeyboardIcon } label="Teclado" onClick={ this.onKeyboardClick } disabled={ controls.keyboard } /> <VDivider />
          <ToolboxItem icon={ MicrophoneIcon } label="Mute" onClick={ this.onMuteClick } disabled={ controls.mute } /> <VDivider />
          <ToolboxItem icon={ PhonePausedIcon } label="Pausar" onClick={ this.onHoldClick } disabled={ controls.hold } />
        </Toolbox>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OngoingCall);

