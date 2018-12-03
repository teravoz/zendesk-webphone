import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changePage, setAppHeight } from '../../actions/settings';
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

    this.props.teravoz.events.on('incomingCall', (payload) => {

    });
  }


  page = () => {
    const { 
      settings: { page }, 
      loading: { isLoading },
      login: { registered }
    } = this.props;

    if (isLoading || page == 'loading') {
      return (<Loading />);
    }

    if (page == 'login') {
      return (<Login teravoz={ this.props.teravoz }/>);
    } 

    if (page == 'ongoing-call') {
      return (<OngoingCall />);
    }

    if (page == 'incoming-request') {
      return (<IncomingRequest />);
    }

    if (page == 'dialing') {
      return (<Dialing teravoz={ this.props.teravoz } />);
    }

    if (page == 'calling') {
      return (<Calling />);
    }

    return (<Login teravoz={ this.props.teravoz } />);
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
  ...bindActionCreators({ changePage }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ settings, loading, login }) => ({ settings, loading, login });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
