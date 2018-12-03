import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import { setAppHeight } from '../../actions/settings';
import CallButtons from '../../components/CallButtons';
import Profile from '../../components/Profile';
import styles from './style.scss';

class IncomingRequest extends React.Component {

  componentWillMount() {
    // Calculate the waiting time... provide an API to obtain these data.
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
          buttonSuccessClick={ () => console.log('enrico') }
          buttonRejectLabel="Rejeitar"
          buttonRejectClick={ () => console.log() }
        />
      </div>
    );
  }
}

IncomingRequest.propTypes = {
  action: PropTypes.string,
};


const mapDispatchToProps = dispatch => ({
  // ...bindActionCreators({ resetStore }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ page }) => ({ page });

export default connect(
  null,
  null
)(IncomingRequest);

