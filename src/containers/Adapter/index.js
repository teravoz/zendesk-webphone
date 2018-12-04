import React, { Fragment } from "react";
import teravozWebRTCAdapter from '@teravoz/react-webrtc-adapter';

import Main from "../Main";
import Loading from "../Loading";
import ZAF from '../../misc/ZAFClient';
import styles from './style.scss';


export default function () {
  return ZAF.client.metadata()
    .then((data) => {
      const { settings } = data;
      const WrappedComponent = teravozWebRTCAdapter(Main, { 
        apiKey: settings.api_key,
        loadingComponent: <Loading />,
      });

      return (<div className={ styles.adapter }><WrappedComponent /></div>);
    });
};