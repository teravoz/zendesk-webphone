import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { setAppHeight } from '../../actions/settings'
import styles from './style.scss';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';
import CallStatus from '../../components/CallStatus';
import Timer from '../../components/Timer';
import DoubleArrowIcon from '../../components/Icons/DoubleArrow';
import Toolbox from '../../components/Toolbox';
import ToolboxItem from '../../components/ToolboxItem';
import MicrophoneIcon from '../../components/Icons/Microphone';
import PhonePausedIcon from '../../components/Icons/PhonePaused';
import TransferIcon from '../../components/Icons/Transfer';
import VDivider from '../../components/VDivider';

const mapStateToProps = ({ page, profile }) => ({
  page ,
  profile
});

const mapDispatchToProps = (dispatch) => ({
  setAppHeight
});

class OngoingCall extends Component {

  state = {
    toolbox: true,
    currentStatus: [],
    muted: false,
    paused: false,
    transfer: false
  }

  componentWillMount() {
    this.props.setAppHeight(290);
  }

  callTimers = () => {

    return (
      <div className={ styles.ongoing__fixed }>
        <CallStatus status="ongoing" action={ this.state.currentStatus.join(', ') } />
        <Timer classes={ styles.mt5 } />
      </div>
    )
  }

  rotateArrow = () => {
    //this.setState({ toolbox: !this.state.toolbox });
  }

  updateCurrentStatus(state, term, currentStatus) {
    const found = currentStatus.findIndex((val) => val == term);
    if (!state) {
      if (found > -1) {
        return;
      } else {
        currentStatus.push(term);
      }
    } else {
      if (found > -1) {
        currentStatus.splice(found, 1);
      }
    }
  }

  pause() {
    const { paused, currentStatus } = this.state;
    this.updateCurrentStatus(paused, 'pausado', currentStatus);
    //this.setState({ paused: !paused, currentStatus });
  }

  mute() {
    const { muted, currentStatus } = this.state;
    this.updateCurrentStatus(muted, 'mute', currentStatus);
    //this.setState({ muted: !muted, currentStatus });
  }

  transfer() {
  }


  render() {

    const { profile } = this.props;
    const toolboxItems = [
    ];

    return (
      <div className={ styles.ongoing }>
        <Profile { ...profile } />
        <CallButtons
          buttonSuccessLabel="Aceitar"
          buttonSuccessTheme="disabled"
          buttonRejectLabel="Desligar"
          buttonRejectClick={ () => console.log('rejeitar') }/>

        <Toolbox visible={ this.state.toolbox } setAppHeight={ this.props.setAppHeight } classes={ styles.mt15 }>
          <ToolboxItem icon={ MicrophoneIcon } label="Mute" onClick={ this.mute } disabled={ this.state.muted } /> <VDivider />
          <ToolboxItem icon={ PhonePausedIcon } label="Pausar" onClick={ this.pause } disabled={ this.state.paused } /> <VDivider />
          <ToolboxItem icon={ TransferIcon } label="Transferir" onClick={ this.transfer } disabled={ this.state.transfer } />
        </Toolbox>

        <div onClick={ this.rotateArrow } className={ styles.ongoing__icon + ' ' + styles.mt10 }>
          <div className={ styles.ongoing__icon__wrapper }>
            <DoubleArrowIcon styles={ this.state.toolbox ? styles.rotate__up : styles.rotate__down }/>
          </div>
        </div>
      </div>
    );
  }
}

OngoingCall.propTypes = {
  action: PropTypes.string,
};

export default connect(
  null,
  mapDispatchToProps
)(OngoingCall);

