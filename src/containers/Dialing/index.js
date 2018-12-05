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
import { setDialingError, setNumber } from '../../actions/dialing';
import { startCall } from '../../actions/call';
import { fetchProfileByNumber } from '../../actions/profile';
import ToolboxItem from '../../components/ToolboxItem';
import VDivider from '../../components/VDivider';
import Dialpad from '../../components/Dialpad';

const mapStateToProps = ({ call, dialing, teravoz }) => ({
  call,
  dialing,
  teravoz
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changePage,
    setDialingError,
    setNumber,
    fetchProfileByNumber,
  }, dispatch),
  startCall: (...args) => dispatch(startCall(...args)),
  setAppHeight
});

class Dialing extends React.Component {

  componentWillMount() {
    this.props.setAppHeight(430);
  }

  onValueChanged = (number) => {
    this.props.setNumber(number);
  }

  onCall = () => {
    const { changePage, dialing, fetchProfileByNumber, setDialingError, startCall, teravoz } = this.props;

    if (dialing.number.length > 0) {
      teravoz.events.once('calling', () => {
        const number = dialing.number;
        startCall('outgoing', 'dialing', number);
        fetchProfileByNumber(number);
        changePage('calling');
      });
      teravoz.events.once('dialError', setDialingError);
      teravoz.dial(dialing.number);
    }
  }

  render() {
    const isDialing = this.props.call.status == 'dialing';
    return (
      <div className={ styles.dialing }>
        <Dialpad
          onValueChanged={ this.onValueChanged }
          onEnterPressed={ this.onCall }
          readOnly={ isDialing }
        />
        <div className={ styles.dialing__button }>
          <Button
            disabled={ !this.props.dialing.number || isDialing }
            onClick={ () => this.onCall() }
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialing);
