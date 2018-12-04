import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';


class Toolbox extends React.Component {

  componentWillReceiveProps(nextProps) {
    const toolboxHeight = this.refs.toolbox.clientHeight;
    if (!nextProps.visible) {
      const height = 290 - toolboxHeight - 20; // the 20 refers to the margin. Could not find a way to get the style dynamically
      nextProps.setAppHeight(height);
    } else {
      nextProps.setAppHeight(290);
    }
  }

  render() {
    const { children, visible } = this.props;

    return (
      <div className={ classnames(styles.toolbox, this.props.classes, { [styles.hidden]: !visible } ) } id="toolbox" ref="toolbox">
        { children }
      </div>
    );
  }
}

Toolbox.propTypes = {
  setAppHeight: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  classes: PropTypes.string
};

export default Toolbox;

