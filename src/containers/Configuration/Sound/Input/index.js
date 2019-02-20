import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ListItem from '../../../../components/ListItem';
import RadioButton from '../../../../components/RadioButton';

import { setAudioInput } from '../../../../actions/devices';

const mapStateToProps = ({ devices, teravoz }) => ({
  devices,
  teravoz
});

const mapDispatchToProps = (dispatch) => ({
  setAudioInput: (item) => dispatch(setAudioInput(item)),
});

class Input extends PureComponent {

  handleDevice = (item) => () => {
    this.props.teravoz.setDevices({ input: item.deviceId });
    this.props.setAudioInput(item);
  }

  render() {
    const { currentInput, audio } = this.props.devices;

    return audio.input.map((item, index) => (
      <ListItem
        key={index}
        text={item.label}
        onClick={this.handleDevice(item)}
        selection={<RadioButton 
          onCheck={this.handleDevice(item)} 
          checked={currentInput.deviceId === item.deviceId} />}
      >
      </ListItem >
    ));
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);