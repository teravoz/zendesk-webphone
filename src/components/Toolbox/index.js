import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
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

  icons = () => {
    const { icons } = this.props;

    return icons.map((item, i) => {
      return (
        <Fragment>
          <div className={ styles.toolbox__items } onClick={ item.disabled ? null : item.handler }>
            <div className={ classnames(styles.toolbox__icon) }>
              <item.icon color={ item.disabled ? '#d3d3d3' : null }/>
            </div>
            <span className={ classnames(styles.toolbox__text, { [styles.toolbox__text__disabled]: item.disabled }) } > 
              { item.label } 
            </span>
          </div>
          { (icons[i+1]) ? <div className={ styles.divider }></div> : null }
        </Fragment>
      );
    });
  }

  render() {
    const { visible } = this.props;
    let hidden = '';
    if (!visible) {
      hidden = styles.hidden;
    }

    return (
      <div className={ classnames(styles.toolbox, hidden, this.props.classes) } id="toolbox" ref="toolbox">
        <this.icons />
      </div>
    );
  }
}

Toolbox.propTypes = {
  setAppHeight: PropTypes.func.isRequired,
  icons: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.func.isRequired,
    handler: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
  })).isRequired,
  visible: PropTypes.bool.isRequired,
  classes: PropTypes.string
};

export default Toolbox;

