import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {  resetStore, setAppHeight } from '../../actions'

import PageOne from '../PageOne'
import PageTwo from '../PageTwo'
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
import IncomingRequest from '../IncomingRequest';
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

    if (page == 'PageOne') {
      return (<PageOne />);
    }

    if (page == 'PageTwo') {
      return (<PageTwo />);
    }

    return null;
  } 

  render() {
      return (
        <div>
          <div className={ styles.content }>
            <Profile 
              name="Enrico Alvarenga"
              email="ealvarenga@teravoz.com.br"
              tags={ [ 'Sem acordo', 'Não quer pagar', 'Enrico Manente Alvarenga'] } />
            <IncomingRequest />
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
