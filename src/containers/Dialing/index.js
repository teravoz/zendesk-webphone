import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { setAppHeight } from '../../actions'
import classnames from 'classnames';

import styles from './style.scss';
import Select from '../../components/Select';
import Toolbox from '../../components/Toolbox';
import KeyboardIcon from '../../components/Icons/KeyboardIcon';
import UserIcon from '../../components/Icons/UserIcon';
import TransferIcon from '../../components/Icons/Transfer';
import Button from '../../components/Button';
import AcceptIcon from '../../components/Icons/Accept';
import Keyboard from '../../components/Keyboard';
import Dialform from '../../components/Dialform';

class Dialing extends React.Component {
  
  state = {
    toolbox: true,
    keyboard: false,
    history: false,
    contacts: false
  }

  componentWillMount() {
    // Calculate the waiting time... provide an API to obtain these data.
    this.props.setAppHeight(290);
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
    console.log(e.target.value);
  }

  countryCodeHandler(value) {
    console.log(value);
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
  // ...bindActionCreators({ resetStore }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ page }) => ({ page });

export default connect(
  null,
  mapDispatchToProps
)(Dialing);