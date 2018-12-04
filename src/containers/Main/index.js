import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ZAF from '../../misc/ZAFClient';
import { setIncomingCall } from '../../actions/incoming';
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
  setIncomingCall: (...args) => dispatch(setIncomingCall(...args)),
  setAppHeight
});

class Main extends Component {

  componentWillMount() {
    const { changePage, setTeravozWebRTCHandler, teravoz, setIncomingCall } = this.props;
    setTeravozWebRTCHandler(teravoz);

    teravoz.events.on('incomingCall', ({ actions, theirNumber }) => {
      setIncomingCall(actions, theirNumber);
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

  render() {
    return (
      <div>
        <div className={ styles.content }>
          { this.renderPage() }
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
