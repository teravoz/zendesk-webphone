import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import storage from '../../misc/ZAFClient';
import { startCall, setIncomingActions } from '../../actions/call';
import { changePage } from '../../actions/settings';
import { push, clear } from '../../actions/configuration';
import { setTeravozWebRTCHandler } from '../../actions/teravoz';
import { clearLogin } from '../../actions/login';
import { getDevices } from '../../actions/devices';

import Footer from '../../components/Footer';
import IncomingRequest from '../IncomingRequest';
import OngoingCall from '../OngoingCall';
import styles from './styles.scss';
import Login from "../Login";
import Dialing from "../Dialing";
import Calling from "../Calling";
import Loading from "../Loading";
import Configuration from '../Configuration';

/* global chrome */
const mapStateToProps = ({ settings, loading, login, configuration }) => ({
  settings,
  loading,
  login,
  configuration
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ changePage, setTeravozWebRTCHandler, clearLogin }, dispatch),
  getDevices: () => dispatch(getDevices()),
  navigation: {
    push: (payload) => dispatch(push(payload)),
    clearAll: () => dispatch(clear()),
  },
  startIncomingCall: (actions, number) => {
    dispatch(startCall('incoming', 'ringing', number));
    dispatch(setIncomingActions(actions));
  },
});

class Main extends Component {

  componentWillMount() {
    const { changePage, setTeravozWebRTCHandler, teravoz, startIncomingCall } = this.props;
    setTeravozWebRTCHandler(teravoz);

    // Fetching devices
    this.props.getDevices();
    navigator.mediaDevices.ondevicechange = this.props.getDevices;
      

    teravoz.events.on('incomingCall', (theirNumber, actions) => {
      startIncomingCall(actions, theirNumber);
      changePage('incoming-request');
    });
  }

  renderPage() {
    const { settings, loading } = this.props;
    const { page } = settings;
    const { isLoading } = loading;

    if (isLoading) {
      return (<Loading />);
    }


    switch (page) {
      case 'loading': return (<Loading />);
      case 'ongoing-call': return (<OngoingCall />);
      case 'incoming-request': return (<IncomingRequest />);
      case 'dialing': return (<Dialing />);
      case 'calling': return (<Calling />);
      case 'configuration': return (<Configuration />);
      case 'login':
      default: return (<Login />);
    }
  }

  destroy = () => {
    storage.removeKey('peer').then(() => {
      this.props.teravoz.events.once('unregistered', () => {
        this.props.clearLogin();
        this.props.changePage('login');
      });
      if (this.props.settings.page === 'incoming-request') {
        this.props.teravoz.hangUp();
      }
      this.props.teravoz.unregister();
    });
  }

  toggleSettings = () => {
    const { stack } = this.props.configuration;
    const { navigation, changePage } = this.props;

    if (stack.length > 0) {
      navigation.clearAll();
      changePage('dialing');
    } else {
      navigation.push({ previous: 'dialing', to: 'configuration' });
      changePage('configuration');
    }
  }

  render() {
    const { page } = this.props.settings;
 
    const isConfiguration = page === 'configuration';
    const isDialing = page === 'dialing';

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {this.renderPage()}
        </div>
        <Footer
          hideLogout={!isDialing && !isConfiguration}
          onClick={this.destroy}
          toggle={this.toggleSettings}
          pressed={isConfiguration}
          configVisible={(isConfiguration || isDialing)}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
