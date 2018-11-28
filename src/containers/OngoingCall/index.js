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
    toolbox: true
  }

  componentWillMount() {
    this.props.setAppHeight(290);
  }

  callTimers = () => {
    return (
      <div>
        <CallStatus status="ongoing" />
        <Timer classes={ styles.mt5 } />
      </div>
    )
  }

  rotateArrow = () => {
    this.setState({ toolbox: !this.state.toolbox });
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
        <Toolbox visible={ this.state.toolbox } setAppHeight={ this.props.setAppHeight } />
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

