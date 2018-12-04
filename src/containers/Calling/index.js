import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import * as callingAnimation from '../../assets/calling-lottie.json';
import { setAppHeight, changePage } from '../../actions/settings';
import { cleanupDialing } from '../../actions/dialing';
import { changeStatus, endCall } from '../../actions/call';

import styles from './style.scss';
import Dialform from '../../components/Dialform/index.js';
import Toolbox from '../../components/Toolbox/index.js';
import Button from '../../components/Button/index.js';
import KeyboardIcon from '../../components/Icons/KeyboardIcon';
import UserIcon from '../../components/Icons/UserIcon';
import TransferIcon from '../../components/Icons/Transfer';
import HangupIcon from '../../components/Icons/Hangup';
import profileIcon from '../../assets/profile.svg';
import Picture from '../../components/Picture/index.js';
import ToolboxItem from '../../components/ToolboxItem/index.js';
import VDivider from '../../components/VDivider/index.js';

class Calling extends Component {
  state = {
    animation: {
      stopped: false,
      paused: false
    },
    toolbox: true,
    keyboard: false,
    history: false,
    contacts: false
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
    const { setAppHeight, teravoz, cleanupDialing, changePage, changeStatus, endCall } = this.props;
    teravoz.events.once('hangup', () => {
      changePage('dialing');
      endCall();
      cleanupDialing();
    });
    teravoz.events.once('cleanup', () => {
      changePage('dialing');
      endCall();
      cleanupDialing();
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
    this.props.teravoz.hangup();
  }

  keyboard() {
    let { keyboard } = this.state;
    keyboard = !keyboard;
    if (keyboard) {
      this.props.setAppHeight(310 + 230);
    } else {
      this.props.setAppHeight(310);
    }
    this.setState({ keyboard });
  }

  history() {
    const { history } = this.state;
    this.setState({ history: !history });
  }

  contacts() {
    const { contacts } = this.state;
    this.setState({ contacts: !contacts });
  }

  renderPictures() {
    const { profile: { photo, name } } = this.props;
    return (
      <div className={ styles.callingperson }>
        <Picture name="Teravoz" />
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
        <Picture name={ name || 'Unknown' } photo={ photo }/>
      </div>
    );
  }

  renderToolbox() {
    return (
      <Toolbox visible={ true } setAppHeight={ this.props.setAppHeight } >
        <ToolboxItem cancelHandler={ true } icon={ KeyboardIcon } label="Teclado" onClick={ this.keyboard.bind(this) } disabled={ true } /> 
        <VDivider />
        <ToolboxItem cancelHandler={ true } icon={ UserIcon } label="Contatos" onClick={ this.contacts.bind(this) } disabled={ true } /> 
        <VDivider />
        <ToolboxItem cancelHandler={ true } icon={ TransferIcon } label="Histórico" onClick={ this.history.bind(this) } disabled={ true } />
      </Toolbox>
    );
  }

  render() {
    return (
      <div className={ styles.calling }>
        <Dialform classes={ styles.mt20 } value={ this.props.dialing.number } disabled={ true } />
        { this.renderPictures() }
        { this.renderToolbox() }
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


const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ cleanupDialing, changePage, changeStatus, endCall }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ teravoz, settings, dialing, profile, call }) => ({ call, teravoz, ...settings, dialing, profile });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calling);