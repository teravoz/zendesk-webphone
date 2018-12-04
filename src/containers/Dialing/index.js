import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import styles from './style.scss';

import Toolbox from '../../components/Toolbox';
import KeyboardIcon from '../../components/Icons/KeyboardIcon';
import UserIcon from '../../components/Icons/UserIcon';
import TransferIcon from '../../components/Icons/Transfer';
import Button from '../../components/Button';
import AcceptIcon from '../../components/Icons/Accept';
import Keyboard from '../../components/Keyboard';
import Dialform from '../../components/Dialform';

import { setAppHeight, changePage } from '../../actions/settings';
import { setCountryCode, setDialing, setNumber, removeNumber } from '../../actions/dialing';
import { startCall } from '../../actions/call';
import { fetchProfileByNumber } from '../../actions/profile';
import ToolboxItem from '../../components/ToolboxItem';
import VDivider from '../../components/VDivider';
import Dialpad from '../../components/Dialpad';

class Dialing extends React.Component {
  
  state = {
    toolbox: true,
    keyboard: false,
    history: false,
    contacts: false
  }

  componentWillMount() {
    const { teravoz, setAppHeight, fetchProfileByNumber, changePage, number } = this.props;
    setAppHeight(430);
    teravoz.events.once('calling', () => {
      startCall('outgoing', 'dialing', this.props.number);
      console.log('############', this.props.number);
      fetchProfileByNumber(this.props.number);
      changePage('calling');
    });
  }



  keyboard() {
    let { keyboard } = this.state;
    keyboard = !keyboard;
    if (keyboard) {
      this.props.setAppHeight(270 + 230);
    } else {
      this.props.setAppHeight(270);
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

  isDialpadValidChar(key) {
    switch(key) {
      case '#':
      case '*':
      case '+':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case 'Backspace':
        return true;
    }
  }

  setNumber(key) {
    const { number, removeNumber, setNumber } = this.props;
    const valid = this.isDialpadValidChar(key);

    if (number.length > 0 && key == 'Enter') {
      this.dial();
      return;
    }

    if (valid) {
      if (key == 'Backspace') {
        removeNumber();
      } else {
        setNumber(key);
      }
    } 
  }

  inputHandler(e) {
    this.setNumber(e.key);
  }

  keyboardHandler = (value) => (e) => {
    this.setNumber(value);
  }


  dial() {
    this.props.teravoz.dial({
      numberTo: this.props.number,
      error: this.props.setError
    });
  }

  renderToolbox() {
    return (
      <Toolbox visible={ true } setAppHeight={ () => {} } classes={ styles.mt40 }>
        <ToolboxItem cancelHandler={ false } icon={ KeyboardIcon } label="Teclado" onClick={ this.keyboard.bind(this) } disabled={ this.state.keyboard } /> 
        <VDivider />
        <ToolboxItem cancelHandler={ false } icon={ UserIcon } label="Contatos" onClick={ this.contacts.bind(this) } disabled={ this.state.contacts } /> 
        <VDivider />
        <ToolboxItem cancelHandler={ false } icon={ TransferIcon } label="Histórico" onClick={ this.history.bind(this) } disabled={ this.state.history } />
      </Toolbox>
    );
  }

  render() {
    const isDialing = this.props.call.status == 'dialing';
    return (
      <div className={ styles.dialing }>
        <Dialpad 
          inputHandler={ this.inputHandler.bind(this) }
          keyboardHandler={ this.keyboardHandler.bind(this) }
          value={ this.props.number }
          disabled={ isDialing }
        />
        <div className={ styles.dialing__button }>
          <Button 
            disabled={ !this.props.number || isDialing }
            onClick={ this.dial.bind(this) }
            classes={ styles.dialing__button__size }
            primary={ true } 
            label="Ligar" 
            icon={ <AcceptIcon /> }
          />
        </div>  
      </div>
    );
  }
}

Dialing.propTypes = {
  action: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changePage, 
    setCountryCode, 
    setDialing, 
    setNumber, 
    removeNumber,
    fetchProfileByNumber,
    startCall
  }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ settings, dialing, teravoz, call }) => ({ ...settings, ...dialing, teravoz, call });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialing);