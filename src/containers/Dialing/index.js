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
import { setCountryCode, setDialing, setNumber } from '../../actions/dialing';

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
      this.props.changePage('');
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

  numberHandler(e) {
    this.props.setNumber(e.target.value);
  }

  countryCodeHandler(value) {
    this.props.setCountryCode(value);
  }

  render() {
    return (
      <div className={ styles.dialing }>
        <Dialform
          classes={ styles.mt20 }
          numberHandler={ this.numberHandler }
          countryCodeHandler={ this.countryCodeHandler }
          visible={ true }     
        />
        <Toolbox 
          icons={[
            { 
              icon: KeyboardIcon, 
              label: 'Teclado', 
              handler: this.keyboard.bind(this), 
              disabled: this.state.keyboard 
            },
            { 
              icon: UserIcon, 
              label: 'Contatos', 
              handler: this.contacts.bind(this), 
              disabled: this.state.contacts  
            },
            { icon: TransferIcon, 
              label: 'Histórico', 
              handler: this.history.bind(this), 
              disabled: this.state.history 
            }
          ]}
          classes={ styles.mt40 }
          visible={ true } 
          setAppHeight={ () => {} } 
        />
        <Keyboard classes={ styles.mt25 } visible={ this.state.keyboard }/>
        <div className={ styles.dialing__button }>
          <Button 
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
  ...bindActionCreators({ changePage, setCountryCode, setDialing, setNumber }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ settings, dialing }) => ({ ...settings, ...dialing });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialing);