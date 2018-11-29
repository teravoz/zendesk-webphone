import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { setAppHeight } from '../../actions'

import styles from './style.scss';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';
import CallStatus from '../../components/CallStatus';
import Timer from '../../components/Timer';
import DoubleArrowIcon from '../../components/Icons/DoubleArrow';
import Toolbox from '../../components/Toolbox';

class OngoingCall extends React.Component {

  state = {
    toolbox: true,
    currentStatus: [],
    muted: false,
    paused: false
  }

  componentWillMount() {
    this.props.setAppHeight(290);
  }

  callTimers = () => {

    return (
      <div className={ styles.ongoing__fixed }>
        <CallStatus status="ongoing" action={ this.state.currentStatus.join(', ') } />
        <Timer classes={ styles.mt5 } />
      </div>
    )
  }

  rotateArrow = () => {
    this.setState({ toolbox: !this.state.toolbox });
  }

  updateCurrentStatus(state, term, currentStatus) {
    const found = currentStatus.findIndex((val) => val == term);
    if (!state) {
      if (found > -1) {
        return;
      } else {
        currentStatus.push(term);
      }
    } else {
      if (found > -1) {
        currentStatus.splice(found, 1);
      }
    }
  }

  pause() {
    const { paused, currentStatus } = this.state;
    this.updateCurrentStatus(paused, 'pausado', currentStatus);
    this.setState({ paused: !paused, currentStatus });
  }

  mute() {
    const { muted, currentStatus } = this.state;
    this.updateCurrentStatus(muted, 'mute', currentStatus);
    this.setState({ muted: !muted, currentStatus });
  }


  render() {
    return (
      <div className={ styles.ongoing }>
        <Profile 
          name="Enrico Alvarenga"
          email="ealvarenga@teravoz.com.br"
          tags={ [ 'Sem acordo', 'Não quer pagar', 'Enrico Manente Alvarenga' ] } 
        />
        <CallButtons 
          buttonSuccessLabel="Aceitar"
          buttonSuccessTheme="disabled"
          buttonSuccessClick={ () => console.log('aceitar') }
          buttonRejectLabel="Desligar"
          buttonRejectClick={ () => console.log('rejeitar') }
          slot={ <this.callTimers /> } 
        />
        <Toolbox 
          visible={ this.state.toolbox } 
          setAppHeight={ this.props.setAppHeight } 
          muteClick={ this.mute.bind(this) }
          pauseClick={ this.pause.bind(this) }
          transferClick={ () => {} }
          muted={ this.state.muted }
          paused={ this.state.paused }
        />
        <div onClick={ this.rotateArrow } className={ styles.ongoing__icon + ' ' + styles.mt10 }>
          <div className={ styles.ongoing__icon__wrapper }>
            <DoubleArrowIcon styles={ this.state.toolbox ? styles.rotate__up : styles.rotate__down }/>
          </div>
        </div>
      </div>
    );
  }
}

OngoingCall.propTypes = {
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
)(OngoingCall);

