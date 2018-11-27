import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { setAppHeight } from '../../actions'

import styles from './style.scss';
import CallStatus from '../../components/CallStatus/index';
import CallTimer from '../../components/CallTimer/index';
import HangupIcon from '../../components/Icons/Hangup';
import AcceptIcon from '../../components/Icons/Accept';

class IncomingRequest extends React.Component {

  componentWillMount() {
    // Calculate the waiting time... provide a API to obtain these data.
  }

  render() {
    return (
      <div className={ styles.incoming }>
        <div className={ styles.incoming__item }>
          <div className={ styles.incoming__icon + ' ' + styles.incoming__icon__accept }>
            <AcceptIcon />
          </div>
          <span className={ styles.incoming__text + ' ' + styles.incoming__text__accept }>
            Aceitar
          </span>
        </div>
        <div className={ styles.incoming__info }>
          <CallStatus status="waiting" />
          <CallTimer classes={ styles.mt7 } time="00:10:01" destination="Comercial" />
        </div>
        <div className={ styles.incoming__item }>
          <div className={ styles.incoming__icon + ' ' + styles.incoming__icon__decline } >
            <HangupIcon />
          </div>
          <span className={ styles.incoming__text + ' ' + styles.incoming__text__decline }>
            Rejeitar
          </span>
        </div>
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

