import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import styles from './style.scss';
import MicrophoneIcon from '../Icons/Microphone';
import PhonePausedIcon from '../Icons/PhonePaused';
import TransferIcon from '../Icons/Transfer';

class Toolbox extends React.Component {

  state = {
    toolboxHeight: 0
  }

  componentWillReceiveProps(nextProps) {
    const toolboxHeight = this.refs.toolbox.clientHeight;
    if (!nextProps.visible) {
      const height = 290 - toolboxHeight - 20; // the 20 refers to the margin. Could not find a way to get the style dynamically
      nextProps.setAppHeight(height);
    } else {
      nextProps.setAppHeight(290);
      this.setState({ toolboxHeight });
    }
  }

  render() {
    const visible = this.props.visible;
    let hidden = '';
    if (!visible) {
      hidden = styles.hidden;
    }
    return (
      <div className={ styles.toolbox + ' ' + styles.mt20 + ' ' + hidden  } id="toolbox" ref="toolbox">
        <div className={ styles.toolbox__items }>
          <div className={ styles.toolbox__icon }>
            <MicrophoneIcon />
          </div>
          <span>Mute</span>
        </div>
        <div className={ styles.divider }></div>
        <div className={ styles.toolbox__items }> 
          <div className={ styles.toolbox__icon }>
            <PhonePausedIcon />
          </div>
          <span>Pausar</span>
        </div>
        <div className={ styles.divider }></div>
        <div className={ styles.toolbox__items }>
          <div className={ styles.toolbox__icon }>
            <TransferIcon />
          </div>
          <span>Transferir</span>
        </div>
      </div>
    );
  }
}

Toolbox.propTypes = {
  setAppHeight: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default Toolbox;

