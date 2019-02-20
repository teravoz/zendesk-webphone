import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changePage, setAppHeight } from '../../actions/settings';
import { push, clear, pop } from '../../actions/configuration';
import { getDevices } from '../../actions/devices';

import ScreenHeader from '../../components/ScreenHeader';
import List from '../../components/List';

import SoundMenu from './Sound/Menu';
import SoundInput from './Sound/Input';
import SoundOutput from './Sound/Output';
import ConfigurationList from './Main';

import style from './style.scss';

const mapStateToProps = ({ configuration }) => ({
  configuration
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ changePage }, dispatch),
  setAppHeight: (h) => dispatch(setAppHeight(h)),
  getDevices: () => dispatch(getDevices()),
  navigation: {
    push: (next) => dispatch(push(next)),
    pop: () => dispatch(pop()),
    clearAll: () => dispatch(clear()),
  },
});

class Configuration extends PureComponent {

  componentWillMount() {
    this.props.setAppHeight(460);
  }

  componentWillUnmount() {
    this.props.navigation.clearAll();
  }

  getPageByCurrent = () => {
    const { current } = this.props.configuration;

    if (!current) {
      return null;;
    }

    switch (current.name) {
      case 'sound': return { title: 'Som', content: <SoundMenu /> };
      case 'sound-input': return { title: 'Entrada', content: <SoundInput /> };
      case 'sound-output': return { title: 'Saída', content: <SoundOutput /> };
      case 'configuration': return { title: 'Configurações', content: <ConfigurationList /> };
      default: return null;
    }
  }

  closeHeader = () => {
    const { changePage, navigation } = this.props;

    navigation.clearAll();
    changePage('dialing');
  }

  goBack = () => {
    const { navigation, configuration, changePage } = this.props;


    if (configuration.stack.length === 1 || !configuration.current || configuration.current.name === 'configuration') {
      navigation.clearAll();
      changePage('dialing');
    } else {
      navigation.pop();
    }
  }

  render() {
    const curr = this.getPageByCurrent();

    if (!curr) return null;

    return (
      <div className={style.configuration}>
        <ScreenHeader
          title={curr.title}
          navigate={this.goBack}
          close={this.closeHeader}
        />
        <List className={style.configuration__options_list}>
          {curr.content}
        </List>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);