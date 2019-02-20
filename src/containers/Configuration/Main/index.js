import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import ListItem from '../../../components/ListItem';
import VolumeIcon from '../../../components/Icons/VolumeIcon';

import { getDevices } from '../../../actions/devices';
import { push } from '../../../actions/configuration';

const mapDispatchToProps = (dispatch) => ({
  getDevices: () => dispatch(getDevices()),
  navigation: {
    push: (payload) => dispatch(push(payload)),
  },
});

class Main extends PureComponent {

  constructor(props) {
    super(props);

    this.tree = [
      {
        title: 'Som',
        icon: VolumeIcon,
        handler: this.handler('sound')
      }
    ]
  }

  handler = (page) => () => {
    this.props.navigation.push({ previous: 'configuration', to: page });
  }

  render() {
    return this.tree.map((item, index) => (
      <ListItem 
        key={index}
        text={item.title}
        onClick={item.handler}
        icon={item.icon}
      />
    ))
  }
}

export default connect(null, mapDispatchToProps)(Main);