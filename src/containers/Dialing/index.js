import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import classnames from 'classnames';

import styles from './style.scss';

import Button from '../../components/Button';
import AcceptIcon from '../../components/Icons/Accept';

import { setAppHeight, changePage, getTones } from '../../actions/settings';
import { setDialingError, setNumber } from '../../actions/dialing';
import { startCall } from '../../actions/call';
import { fetchProfileByNumber } from '../../actions/profile';
import Dialpad from '../../components/Dialpad';

const mapStateToProps = ({ call, dialing, teravoz, devices, settings }) => ({
  call,
  dialing,
  teravoz,
  devices, 
  settings
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changePage,
    setDialingError,
    setNumber,
    fetchProfileByNumber,
  }, dispatch),
  getTones: (refs) => dispatch(getTones(refs)),
  startCall: (...args) => dispatch(startCall(...args)),
  setAppHeight: () => dispatch(setAppHeight(460))
});

class Dialing extends React.Component {
  
  references = {};

  componentWillMount() {
    this.props.setAppHeight();
  }
  
  componentDidMount() {
    this.props.getTones(this.references);
  }

  createRef(name) {
    this.references[name] = React.createRef();

    return this.references[name];
  }

  onValueChanged = (number, key) => {
    const { tones } = this.props.settings;
    if (tones) {
      if (key && key !== 'Backspace' && key !== 'Enter' && key !== 'Delete') {
        if (!tones[key].paused) {
          tones[key].pause();
          tones[key].currentTime = 0;
        }
        tones[key].play().then(() => {
          this.props.setNumber(number);
        }).catch((error) => {
          this.props.setNumber(number);
        });
      } else {
        this.props.setNumber(number);
      }
    }
  }

  renderAudio = () => {
    return (
      <Fragment> 
        <audio className={styles.dialing__hidden} ref={this.createRef('0')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('1')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('2')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('3')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('4')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('5')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('6')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('7')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('8')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('9')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('#')}></audio>
        <audio className={styles.dialing__hidden} ref={this.createRef('*')}></audio>
      </Fragment>
    );
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
      <div className={ classnames(styles.dialing, styles.mt30) }>
        <Dialpad
          onValueChanged={ this.onValueChanged }
          onEnterPressed={ this.onCall }
          readOnly={ isDialing }
        />
        <div onClick={ () => this.onCall() } className={ styles.dialing__button }>
          <Button
            disabled={ !this.props.dialing.number || isDialing }
            classes={ styles.dialing__button__size }
            primary={ true }
            label="Ligar"
            icon={ <AcceptIcon /> }
          />
        </div>

        { this.renderAudio() }
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
