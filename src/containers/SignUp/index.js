import React from "react";
import { connect } from 'react-redux'

import { setAppHeight } from '../../actions/settings';
import Footer from '../../components/Footer';
import styles from './style.scss';


class SignUp extends React.Component {

  componentWillMount() {
    this.props.setAppHeight(290);
  }

  render() {
      return (
        <div>
          <div className={ styles.signup }>
              <h4>Não é cliente Teravoz ?</h4>
            <button>
              <a target="_blank" href="https://painel.teravoz.com.br/TeraManagement/contratar-pabx-virtual-plano"> Contrate </a>
            </button>
          </div>
          <Footer />
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({ setAppHeight });

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
