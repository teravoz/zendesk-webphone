import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import { setAppHeight } from '../../actions/settings';
import { changePage } from '../../actions/settings';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';
import styles from './style.scss';

const mapStateToProps = ({ incoming, teravoz }) => ({
  incoming,
  teravoz
});

const mapDispatchToProps = (dispatch) => ({
  setDefaults: () => dispatch(setAppHeight),
  changePage: (page) => dispatch(changePage(page))
});

class IncomingRequest extends Component {

  componentWillMount() {
    this.props.setDefaults();

    this.props.teravoz.events.once('acceptedCall', this.onCallAccepted);
    this.props.teravoz.events.once('hangup', this.onCallFinished);
    this.props.teravoz.events.once('missedCall', this.onCallFinished);
    this.props.teravoz.events.once('cleanup', this.onCallFinished);
  }

  onCallAccepted = () => {
    this.props.changePage('ongoing-call');
  }

  onCallFinished = () => {
    this.props.changePage('dialing');
  }

  onAcceptCall = () => {
    this.props.incoming.actions.accept();
  }

  onRejectCall = () => {
    this.props.incoming.actions.decline();
  }

  render() {
    return (
      <div>
        <Profile
          name="Enrico Alvarenga"
          email="ealvarenga@teravoz.com.br"
          tags={ [ 'Sem acordo', 'Não quer pagar', 'Enrico Manente Alvarenga' ] }
        />
        <CallButtons
          buttonSuccessLabel="Aceitar"
          buttonSuccessClick={ this.onAcceptCall }
          buttonRejectLabel="Rejeitar"
          buttonRejectClick={ this.onRejectCall }
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomingRequest);

