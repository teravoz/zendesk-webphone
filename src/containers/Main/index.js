import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

class Main extends React.Component {

  componentWillMount() {
    this.props.setTeravozWebRTCHandler(this.props.teravoz);
  }


  page = () => {
    const { 
      settings: { page }, 
      loading: { isLoading },
    } = this.props;

    if (isLoading || page == 'loading') {
      return (<Loading />);
    }

    if (page == 'login') {
      return (<Login />);
    } 

    if (page == 'ongoing-call') {
      return (<OngoingCall />);
    }

    if (page == 'incoming-request') {
      return (<IncomingRequest />);
    }

    if (page == 'dialing') {
      return (<Dialing />);
    }

    if (page == 'calling') {
      return (<Calling />);
    }

    return (<Login />);
  } 

  render() {
      return (
        <div>
          <div className={ styles.content }>
            <this.page />
          </div>
          <Footer />
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changePage, setTeravozWebRTCHandler }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ settings, loading, login }) => ({ settings, loading, login });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
