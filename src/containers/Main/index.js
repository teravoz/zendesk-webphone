import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {  resetStore, setAppHeight } from '../../actions'

import Footer from '../../components/Footer';
import IncomingRequest from '../IncomingRequest';
import OngoingCall from '../OngoingCall';
import styles from './styles.scss';

class Main extends React.Component {

  componentWillMount() {
    document.getElementById('app').style.height = '214px';
    this.props.setAppHeight(214);
  }
  
  componentDidMount() {
  }

  page = () => {
    const { page } = this.props

    if (page == 'ongoing-call') {
      return (<OngoingCall />);
    }

    if (page == 'incoming-request') {
      return (<IncomingRequest />);
    }

    

    return (<OngoingCall />);
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
  ...bindActionCreators({ resetStore }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ page }) => ({ page });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
