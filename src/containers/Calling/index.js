import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import classnames from 'classnames';


import * as callingAnimation from '../../assets/calling-lottie.json';
import { setAppHeight } from '../../actions/settings';

import styles from './style.scss';
import Dialform from '../../components/Dialform/index.js';
import Toolbox from '../../components/Toolbox/index.js';
import Button from '../../components/Button/index.js';
import KeyboardIcon from '../../components/Icons/KeyboardIcon';
import UserIcon from '../../components/Icons/UserIcon';
import TransferIcon from '../../components/Icons/Transfer';
import HangupIcon from '../../components/Icons/Hangup';
import profileIcon from '../../assets/profile.svg';

class Calling extends React.Component {
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
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  numberHandler(e) {
    console.log(e.target.value);
  }

  countryCodeHandler(value) {
    console.log(value);
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

  
  componentWillMount() {
    // Calculate the waiting time... provide an API to obtain these data.
    this.props.setAppHeight(310);
  }

  render() {
    return (
      <div className={ styles.calling }>
        <Dialform 
          classes={ styles.mt20 }
          numberHandler={ this.numberHandler }
          countryCodeHandler={ this.countryCodeHandler }
          defaultNumberValue="011940289846"
          disabled={ true }
          visible={ true }
        />
        <div className={ styles.callingperson }>
          <div className={ styles.callingperson__profile__item }>
            <img src={ profileIcon } alt="callee-profile" className={ styles.callingperson__img } />
            <span> Teravoz </span>
          </div>
            <div className={ styles.callingperson__profile__animation }>
              <Lottie 
              options={ this.defaultOptions }
              height={ 100 }
              width={ 100 }
              isStopped={ this.state.animation.stopped }
              isPaused={ this.state.animation.paused }
              />
              <span> Chamando </span>
            </div>
          <div className={ styles.callingperson__profile__item }>
            <img src={ profileIcon } alt="callee-profile" className={ styles.callingperson__img } />
            <span> Teravoz </span>
          </div>
        </div>
        <Toolbox 
            icons={[
              { 
                icon: KeyboardIcon, 
                label: 'Teclado', 
                handler: this.keyboard.bind(this), 
                disabled: true
              },
              { 
                icon: UserIcon, 
                label: 'Contatos', 
                handler: this.contacts.bind(this), 
                disabled: true  
              },
              { icon: TransferIcon, 
                label: 'Histórico', 
                handler: this.history.bind(this), 
                disabled: true
              }
            ]}
            visible={ true } 
            setAppHeight={ () => {} } 
          />
        <div className={ classnames(styles.calling__button, styles.mt30) }>
          <Button 
            transparent={ true } 
            medium={ true }
            red={ true }
            label="Cancelar" 
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
  // ...bindActionCreators({ resetStore }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ page }) => ({ page });

export default connect(
  null,
  mapDispatchToProps
)(Calling);