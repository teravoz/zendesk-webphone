import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.scss';

const ToolboxItem =  (props) => {
  const { disabled, label, onClick } = props;
  return (
    <Fragment>
      <div className={ styles.toolbox_item } onClick={ onClick }>
        <div className={ classnames(styles.toolbox_item__icon) }>
          <props.icon color={ (disabled && '#d3d3d3') || null }/>
        </div>
        <span className={ classnames(styles.toolbox_item__text, { [styles.toolbox_item__text__disabled]: disabled }) } >
          { label }
        </span>
      </div>
    </Fragment>
  );
};

ToolboxItem.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ToolboxItem;

