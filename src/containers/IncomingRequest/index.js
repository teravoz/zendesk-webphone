import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import { changePage, setAppHeight } from '../../actions/settings';
import { fetchProfileByNumber } from '../../actions/profile';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';
import styles from './style.scss';

const mapStateToProps = ({ incoming, profile, teravoz }) => ({
  incoming,
  profile,
  teravoz
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (page) => dispatch(changePage(page)),
  fetchProfile: (number) => dispatch(fetchProfileByNumber(number)),
  setDefaults: () => dispatch(setAppHeight)
});

class IncomingRequest extends Component {

  componentWillMount() {
    const { fetchProfile, incoming, setDefaults, teravoz } = this.props;
    setDefaults();

    teravoz.events.once('acceptedCall', this.onCallAccepted);
    teravoz.events.once('hangup', this.onCallFinished);
    teravoz.events.once('missedCall', this.onCallFinished);
    teravoz.events.once('cleanup', this.onCallFinished);
    fetchProfile(incoming.number);
  }

  onCallAccepted = () => {
    this.props.changePage('ongoing-call');
  }

  onCallFinished = () => {
    this.props.changePage('dialing');
  }

  onAcceptCall = () => {
    this.props.incoming.actions.accept();
  }

  onRejectCall = () => {
    this.props.incoming.actions.decline();
  }

  render() {
    const { profile } = this.props;
    const { name, email, tags, photo } = profile;

    return (
      <Fragment>
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

