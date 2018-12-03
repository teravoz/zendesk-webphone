import React, { Fragment } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import teravozWebRTCAdapter from '@teravoz/react-webrtc-adapter';

import { setWebRTCApiKey } from '../../actions/settings';
import Main from "../Main";
import styles from './style.scss';
import Loading from "../Loading";

class Adapter extends React.Component {

  componentWillMount() {
    this.props.setWebRTCApiKey();
  }
  
  render() {
    if (!this.props.apiKey) {
      return null;
    }

    const WrappedComponent = teravozWebRTCAdapter(Main, { 
      apiKey: this.props.apiKey,
      loadingComponent: <Loading />,
    });
    return (
      <div className={ styles.adapter }>
        <WrappedComponent />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ setWebRTCApiKey }, dispatch),
});

const mapStateToProps = ({ settings }) => ({ ...settings });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adapter);
