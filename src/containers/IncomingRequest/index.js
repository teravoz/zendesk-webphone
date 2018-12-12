import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Sound from 'react-sound';

import { changeStatus, endCall } from '../../actions/call';
import { fetchProfileByNumber } from '../../actions/profile';
import { changePage, setAppHeight } from '../../actions/settings';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';


const mapStateToProps = ({ call, profile, teravoz }) => ({
  call,
  profile,
  teravoz
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (page) => dispatch(changePage(page)),
  changeStatus: (status) => dispatch(changeStatus(status)),
  endCall: () => dispatch(endCall()),
  fetchProfile: (number) => dispatch(fetchProfileByNumber(number)),
  setAppHeight
});

class IncomingRequest extends Component {

  componentWillMount() {
    const { fetchProfile, call, setAppHeight, teravoz } = this.props;
    setAppHeight(200);

    // Setting the ringing audio defaults;
    teravoz.events.once('acceptedCall', this.onCallAccepted);
    teravoz.events.once('hangUp', this.onCallFinished);
    teravoz.events.once('missedCall', this.onCallFinished);
    teravoz.events.once('cleanUp', this.onCallFinished);
    fetchProfile(call.number);
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
        { this.props.call.status == 'ringing' ?
          <Sound 
            url={ `${process.env.SOUND_BASE_PATH}/ringing.mp3` }
            loop={ true }
            playStatus={ Sound.status.PLAYING }
          /> :  null 
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

