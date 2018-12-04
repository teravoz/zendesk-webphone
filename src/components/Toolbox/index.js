import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';


class Toolbox extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div className={ classnames(styles.toolbox, this.props.classes ) } id="toolbox" ref="toolbox">
        { children }
      </div>
    );
  }
}

Toolbox.propTypes = {
  classes: PropTypes.string
};

export default Toolbox;

