import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import * as callingAnimation from '../../assets/calling-lottie.json';
import { setAppHeight, changePage } from '../../actions/settings';
import { changeStatus, endCall } from '../../actions/call';

import styles from './style.scss';
import Dialform from '../../components/Dialform/index.js';
import Button from '../../components/Button/index.js';
import KeyboardIcon from '../../components/Icons/KeyboardIcon';
import UserIcon from '../../components/Icons/UserIcon';
import TransferIcon from '../../components/Icons/Transfer';
import HangupIcon from '../../components/Icons/Hangup';
import profileIcon from '../../assets/profile.svg';
import NamedPhoto from '../../components/NamedPhoto/index.js';
import VDivider from '../../components/VDivider/index.js';

const mapStateToProps = ({ call, profile, teravoz }) => ({
  call,
  profile,
  teravoz
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changePage, changeStatus, endCall }, dispatch),
  setAppHeight
});

class Calling extends Component {

  state = {
    animation: {
      stopped: false,
      paused: false
    }
  }

  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: callingAnimation.default,
    rendererSettings: {
      className: styles.calling_lottie,
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  componentWillMount() {
    const { setAppHeight, teravoz, changePage, changeStatus, endCall } = this.props;
    teravoz.events.once('hangUp', () => {
      changePage('dialing');
      endCall();
    });
    teravoz.events.once('cleanup', () => {
      changePage('dialing');
      endCall();
    });
    teravoz.events.once('acceptedCall', () => {
      changeStatus('ongoing');
      changePage('ongoing-call');
    });
    teravoz.events.once('earlyMedia', () => {
      changeStatus('calling');
    });

    setAppHeight(310);
  }

  hangup() {
    this.props.teravoz.hangUp();
  }

  renderPictures() {
    const { profile: { photo, name } } = this.props;
    return (
      <div className={ styles.callingperson }>
        <NamedPhoto name="Teravoz" />
        <div className={ styles.callingperson__profile__animation }>
          <Lottie
            options={ this.defaultOptions }
            height={ 80 }
            width={ 100 }
            isStopped={ this.state.animation.stopped }
            isPaused={ this.state.animation.paused }
          />
          <span> Chamando </span>
        </div>
        <NamedPhoto name={ name || 'Unknown' } photoUrl={ photo }/>
      </div>
    );
  }

  render() {
    return (
      <div className={ styles.calling }>
        <Dialform classes={ styles.mt30 } value={ this.props.call.number } disabled={ true } />
        { this.renderPictures() }
        <div className={ classnames(styles.calling__button, styles.mt30) }>
          <Button
            transparent={ true }
            medium={ true }
            red={ true }
            label="Cancelar"
            onClick={ this.hangup.bind(this) }
            icon={ <HangupIcon color='#d6002b' /> }
          />
        </div>
      </div>
    );
  }
}

Calling.propTypes = {
  action: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calling);
