import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import { changeStatus, endCall } from '../../actions/call';
import { fetchProfileByNumber } from '../../actions/profile';
import { changePage, setAppHeight } from '../../actions/settings';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';

import styles from './style.scss';

const mapStateToProps = ({ call, profile, settings, teravoz, devices }) => ({
  call,
  profile,
  settings,
  teravoz, 
  devices
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (page) => dispatch(changePage(page)),
  changeStatus: (status) => dispatch(changeStatus(status)),
  endCall: () => dispatch(endCall()),
  fetchProfile: (number) => dispatch(fetchProfileByNumber(number)),
  setAppHeight: () => dispatch(setAppHeight(215))
});

class IncomingRequest extends Component {

  constructor(props) {
    super(props);

    this.ringingSound = React.createRef();
  }

  state = {
    sinkId: false
  }

  componentWillMount() {
    const { fetchProfile, call, setAppHeight, teravoz } = this.props;
    setAppHeight();

    // Setting the ringing audio defaults;
    teravoz.events.once('acceptedCall', this.onCallAccepted);
    teravoz.events.once('hangUp', this.onCallFinished);
    teravoz.events.once('missedCall', this.onCallFinished);
    teravoz.events.once('cleanUp', this.onCallFinished);
    fetchProfile(call.number);
  }

  componentDidMount() {
    const { devices: { currentOutput } } = this.props;

    if (this.ringingSound && this.ringingSound.current) {
      this.ringingSound.current.volume = 1;

    if (this.ringingSound.current.sinkId === currentOutput.deviceId 
      || (!this.ringingSound.current.sinkId && currentOutput.deviceId === 'default')) {
      return;
    }

      this.ringingSound.current.setSinkId(currentOutput.deviceId)
        .then(() => {
          console.debug(`Successfuly set the output device ${currentOutput.label} - ${currentOutput.deviceId} to ringing sound.`);
          this.setState({ sinkId: true });
        })
        .catch((error) => {
          console.debug(`Failed to set the output device ${currentOutput.label} - ${currentOutput.deviceId} to the ringing sound : ${error.message}`)
        });
    }
  }

  onCallAccepted = () => {
    this.props.changeStatus('ongoing');
    this.props.changePage('ongoing-call');
  }

  onCallFinished = () => {
    this.props.endCall();
    this.props.changePage('dialing');
  }

  onAcceptCall = () => {
    this.props.call.incoming.actions.accept();
  }

  onRejectCall = () => {
    this.props.call.incoming.actions.decline();
  }

  render() {
    const { profile } = this.props;
    return (
      <Fragment>
        { this.props.call.status === 'ringing' ?
          <audio autoPlay={true} loop={true} src={`${process.env.SOUND_BASE_PATH}/ringing.mp3`} className={styles.incomingrequest__hidden} ref={this.ringingSound} /> 
          : null
        }
        <Profile { ...profile } />
        <CallButtons
          buttonSuccessLabel="Aceitar"
          buttonSuccessClick={ this.onAcceptCall }
          buttonRejectLabel="Rejeitar"
          buttonRejectClick={ this.onRejectCall }
        />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomingRequest);

