import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ListItem from '../../../../components/ListItem';
import RadioButton from '../../../../components/RadioButton';

import { setAudioOutput } from '../../../../actions/devices';

const mapStateToProps = ({ devices, teravoz }) => ({
  devices, 
  teravoz
});

const mapDispatchToProps = (dispatch) => ({
  setAudioOutput: (item) => dispatch(setAudioOutput(item))
});

class Output extends PureComponent {

  handleDevice = (item) => () => { 
    const { teravoz: { streams } } = this.props;
    if (streams.remote && streams.remote.current) {
      streams.remote.current.setSinkId(item.deviceId)
        .then(() => {
          console.debug(`Successfully set the output device: ${item.label} - ${item.deviceId}`);
        })
        .catch((error) => {
          console.debug(`Failed to set the output device: ${item.label} - ${item.deviceId}: ${error.message}`);
        })
    }

    this.props.setAudioOutput(item);
  }

  render() {
    const { currentOutput, audio } = this.props.devices;

    return audio.output.map((item, index) => (
      <ListItem
        key={index}
        text={item.label}
        onClick={this.handleDevice(item)}
        selection={<RadioButton 
          onCheck={this.handleDevice(item)} 
          checked={currentOutput.deviceId === item.deviceId} />}
        >
      </ListItem >
    ));
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Output);