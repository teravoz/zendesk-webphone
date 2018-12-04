import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { setAppHeight } from '../../actions/settings'
import { changeStatus, endCall, toggleHold, toggleMute } from '../../actions/call';
import styles from './style.scss';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';
import CallStatus from '../../components/CallStatus';
import Timer from '../../components/Timer';
import Dialpad from '../../components/Dialpad';
import DoubleArrowIcon from '../../components/Icons/DoubleArrow';
import Toolbox from '../../components/Toolbox';
import ToolboxItem from '../../components/ToolboxItem';
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
  toggleHold: () => dispatch(toggleHold()),
  toggleMute: () => dispatch(toggleMute()),
  setAppHeight
});

class OngoingCall extends Component {

  componentWillMount() {
    this.props.setAppHeight(580);
  }

  onValueChanged = (number) => {
  }

  onCall = () => {
  }

  onHangUpClick = () => {
    this.props.teravoz.hangup();
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

        <Toolbox classes={ classNames(styles.mt30, styles.mb30) }>
          <ToolboxItem icon={ MicrophoneIcon } label="Mute" onClick={ this.onMuteClick } disabled={ controls.mute } /> <VDivider />
          <ToolboxItem icon={ PhonePausedIcon } label="Pausar" onClick={ this.onHoldClick } disabled={ controls.hold } />
        </Toolbox>

        <Dialpad
          onValueChanged={ this.onValueChanged }
          onEnterPressed={ this.onCall }
          readOnly={ true }
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OngoingCall);

