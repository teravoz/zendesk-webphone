import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import styles from './style.scss';

import Button from '../../components/Button';
import AcceptIcon from '../../components/Icons/Accept';

import { setAppHeight, changePage } from '../../actions/settings';
import { setDialingError, setNumber } from '../../actions/dialing';
import { startCall } from '../../actions/call';
import { fetchProfileByNumber } from '../../actions/profile';
import Dialpad from '../../components/Dialpad';
import getTones from '../../misc/digit-tones';

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

  constructor(props) {
    super(props);

    this.audio = getTones();
  }

  componentWillMount() {
    this.props.setAppHeight(430);
  }

  onValueChanged = (number, key) => {
    if (key !== 'Backspace' && key !== 'Enter') {
      this.audio[key].play();
    }
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
