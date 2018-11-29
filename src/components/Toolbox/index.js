import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './style.scss';
import MicrophoneIcon from '../Icons/Microphone';
import PhonePausedIcon from '../Icons/PhonePaused';
import TransferIcon from '../Icons/Transfer';

class Toolbox extends React.Component {

  componentWillReceiveProps(nextProps) {
    const toolboxHeight = this.refs.toolbox.clientHeight;
    if (!nextProps.visible) {
      const height = 290 - toolboxHeight - 20; // the 20 refers to the margin. Could not find a way to get the style dynamically
      nextProps.setAppHeight(height);
    } else {
      nextProps.setAppHeight(290);
    }
  }

  pressed = (origin) => (e) => {
    const { transferClick, muteClick, pauseClick } = this.props;
    switch(origin) {
      case 'transfer':
        transferClick();
        break;
      case 'mute':
        muteClick();
        break;
      case 'pause':
        pauseClick();
        break;
    }
  }

  getTheme() {
    const { muted, paused } = this.props;
    let theme = { 
      muted: { icon: null, text: styles.toolbox__text }, 
      paused: { icon: null, text: styles.toolbox__text } 
    };
    if (muted) {
      theme.muted.text = styles.toolbox__text + ' ' + styles.toolbox__disabled;
      theme.muted.icon = '#d3d3d3';
    }
    if (paused) {
      theme.paused.text = styles.toolbox__text + ' ' + styles.toolbox__disabled;
      theme.paused.icon = '#d3d3d3';
    }

    return theme;
  }

  render() {
    const { visible } = this.props;
    let hidden = '';
    if (!visible) {
      hidden = styles.hidden;
    }
    const theme = this.getTheme();

    return (
      <div className={ styles.toolbox + ' ' + styles.mt20 + ' ' + hidden  } id="toolbox" ref="toolbox">
        <div className={ styles.toolbox__items } onClick={ this.pressed.bind(this)('mute') }>
          <div className={ styles.toolbox__icon + ' ' + theme.muted.icon }>
            <MicrophoneIcon color={ theme.muted.icon }/>
          </div>
          <span className={ theme.muted.text } >Mute</span>
        </div>
        <div className={ styles.divider }></div>
        <div className={ styles.toolbox__items } onClick={ this.pressed.bind(this)('pause') }> 
          <div className={ styles.toolbox__icon + ' ' + theme.paused.icon }>
            <PhonePausedIcon color={ theme.paused.icon } />
          </div>
          <span className={ theme.paused.text }>Pausar</span>
        </div>
        <div className={ styles.divider }></div>
        <div className={ styles.toolbox__items } onClick={ this.pressed.bind(this)('transfer') }>
          <div className={ styles.toolbox__icon }>
            <TransferIcon />
          </div>
          <span className={ styles.toolbox__text }>Transferir</span>
        </div>
      </div>
    );
  }
}

Toolbox.propTypes = {
  setAppHeight: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  muteClick: PropTypes.func.isRequired,
  pauseClick: PropTypes.func.isRequired,
  transferClick: PropTypes.func.isRequired,
  muted: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired
};

export default Toolbox;

