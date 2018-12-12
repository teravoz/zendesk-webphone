import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ZAF from '../../misc/ZAFClient';
import { startCall, setIncomingActions } from '../../actions/call';
import { changePage, setAppHeight } from '../../actions/settings';
import { setTeravozWebRTCHandler } from '../../actions/teravoz';
import Footer from '../../components/Footer';
import IncomingRequest from '../IncomingRequest';
import OngoingCall from '../OngoingCall';
import styles from './styles.scss';
import Login from "../Login";
import Dialing from "../Dialing";
import Calling from "../Calling";
import Loading from "../Loading";

const mapStateToProps = ({ settings, loading, login }) => ({
  settings,
  loading,
  login
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ changePage, setTeravozWebRTCHandler }, dispatch),
  startIncomingCall: (actions, number) => {
    dispatch(startCall('incoming', 'ringing', number));
    dispatch(setIncomingActions(actions));
  },
  setAppHeight
});

class Main extends Component {

  componentWillMount() {
    const { changePage, setTeravozWebRTCHandler, teravoz, startIncomingCall } = this.props;
    setTeravozWebRTCHandler(teravoz);

    teravoz.events.on('incomingCall', (theirNumber, actions) => {
      startIncomingCall(actions, theirNumber);
      changePage('incoming-request');
      ZAF.client.invoke('popover', 'show');
    });
  }

  renderPage() {
    const { settings, loading } = this.props;
    const { page } = settings;
    const { isLoading } = loading;

    if (isLoading) {
      return (<Loading />);
    }

    switch(page) {
      case 'loading': return (<Loading />);
      case 'ongoing-call': return (<OngoingCall />);
      case 'incoming-request': return (<IncomingRequest />);
      case 'dialing': return (<Dialing />);
      case 'calling': return (<Calling />);
      case 'login':
      default: return (<Login />);
    }
  }

  destroy = () => {
    ZAF.removeKey('peer').then(() => {
      this.props.teravoz.events.once('unregistered', () => {
        this.props.changePage('login');
      });
      if (this.props.settings.page == 'incoming-request') {
        this.props.teravoz.hangUp();
      }
      this.props.teravoz.unregister();
    });
  }

  render() {
    const page = this.props.settings.page === 'login' || this.props.settings.page === 'ongoing-call';
    return (
      <div>
        <div className={ styles.content }>
          { this.renderPage() }
        </div>
        <Footer hideLogout={ page } onClick={ this.destroy }/>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
