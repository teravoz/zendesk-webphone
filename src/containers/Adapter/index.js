import React from "react";
import teravozWebRTCAdapter from '@teravoz/react-webrtc-adapter';

import Main from "../Main";
import Loading from "../Loading";
import SignUp from "../SignUp";
import styles from './style.scss';


export default function () {
  const WrappedComponent = teravozWebRTCAdapter(Main, {
    url: process.env.WEBRTC_CDN,
    origin: 'zendesk://teravoz-webphone',
    loadingComponent: <Loading />,
    errorComponent: <SignUp />
  });

  return (<div className={ styles.adapter }><WrappedComponent /></div>);
};