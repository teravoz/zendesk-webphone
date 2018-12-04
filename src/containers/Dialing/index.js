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

class Dialing extends React.Component {
  
  state = {
    toolbox: true,
    keyboard: false,
    history: false,
    contacts: false
  }

  componentWillMount() {
    this.props.setAppHeight(290);

    this.props.teravoz.events.on('calling', () => {
      this.props.changePage('calling');
    });
  }

  keyboard() {
    let { keyboard } = this.state;
    keyboard = !keyboard;
    if (keyboard) {
      this.props.setAppHeight(290 + 230);
    } else {
      this.props.setAppHeight(290);
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
    const valid = this.isDialpadValidChar(key);
    if (valid) {
      if (key == 'Backspace') {
        this.props.removeNumber();
      } else {
        this.props.setNumber(key);
      }
    }
  }

  numberHandler(e) {
    this.setNumber(e.key);
  }

  numberClickHandler = (value) => (e) => {
    this.setNumber(value);
  }

  dial(e) {
    this.props.teravoz.dial({
      numberTo: this.props.number,
      error: this.props.setError
    });
  }

  render() {
    return (
      <div className={ styles.dialing }>
        <Dialform
          classes={ styles.mt20 }
          numberHandler={ this.numberHandler.bind(this) }
          defaultNumberValue={ this.props.number }
          visible={ true }     
        />
        <Toolbox 
          icons={[
            { 
              icon: KeyboardIcon, 
              label: 'Teclado', 
              handler: this.keyboard.bind(this), 
              disabled: this.state.keyboard,
              cancelHandler: false
            },
            { 
              icon: UserIcon, 
              label: 'Contatos', 
              handler: this.contacts.bind(this), 
              disabled: this.state.contacts ,
              cancelHandler: false 
            },
            { icon: TransferIcon, 
              label: 'Histórico', 
              handler: this.history.bind(this), 
              disabled: this.state.history,
              cancelHandler: false
            }
          ]}
          classes={ styles.mt40 }
          visible={ true } 
          setAppHeight={ () => {} } 
        />
        <Keyboard classes={ styles.mt25 } onClick={ this.numberClickHandler.bind(this) } visible={ this.state.keyboard }/>
        <div className={ styles.dialing__button }>
          <Button 
            disabled={ !this.props.number }
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
  ...bindActionCreators({ changePage, setCountryCode, setDialing, setNumber, removeNumber }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ settings, dialing, teravoz }) => ({ ...settings, ...dialing, teravoz });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialing);