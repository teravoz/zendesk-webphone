import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ListItem from '../../../../components/ListItem';

import { getDevices } from '../../../../actions/devices';
import { push } from '../../../../actions/configuration';


const mapStateToProps = ({ devices }) => ({
  devices
});

const mapDispatchToProps = (dispatch) => ({
  getDevices: () => dispatch(getDevices()),
  navigation: {
    push: (payload) => dispatch(push(payload)),
  },
});

class Menu extends PureComponent {

  constructor(props) {
    super(props);

    this.tree = [
      {
        title: 'Entrada',
        handler: this.handler('input')
      },
      {
        title: 'Saída',
        handler: this.handler('output')
      }
    ];
  }

  handler = (type) => () => {
    const { navigation } = this.props;

    navigation.push({ previous: 'sound', to: `sound-${type}` });
  }


  render() {
    return this.tree.map((item, index) => (
      <ListItem
        key={index}
        text={item.title}
        onClick={item.handler}
        style={{ cursor: 'pointer' }}>
      </ListItem >
    ));
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu);