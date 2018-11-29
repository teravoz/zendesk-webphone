import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { setAppHeight } from '../../actions'

import styles from './style.scss';
import Checkbox from '../../components/Checkbox';

class Login extends React.Component {

  state = {
    remainConnected: true,
    text: 'Utilize a mesma senha cadastrada em seu ramal',
  };

  componentWillMount() {
    this.props.setAppHeight(290);
  }

  onCheck() {
    this.setState({ remainConnected: !this.state.remainConnected })
  }

  render() {
    let errorTheme = '';//error ? styles.login__form__item__error : ' ';
    return (
      <div className={ styles.login }>
        <div className={ styles.login__form }>
          <div className={ styles.login__form__item }>
            <input type="text" placeholder="Ramal" />
          </div>
          <div className={ styles.login__form__item  + ' ' + styles.mt25 }>
            <input type="text" placeholder="Senha" />
            <span className={ styles.login__form__item__info + ' ' + errorTheme}>
              { this.state.text }
            </span>
          </div>
          <div className={ styles.login__form__item  + ' ' + styles.mt15 }>
            <Checkbox onCheck={ this.onCheck.bind(this) } checked={ this.state.remainConnected } label="Permanecer conectado" />
          </div>

          <div className={ styles.login__form__item + ' ' + styles.mt30 }>
            <button className={ styles.login__form__item__button }> Acessar </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
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
)(Login);

