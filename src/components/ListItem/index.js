import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

const ListItem = (props) => {
  return (
    <li className={style.list_item} onClick={props.onClick}>
      {props.icon ? <span className={style.list_item__icon}>{<props.icon />}</span> : null}
      {props.selection ? props.selection : null }
      <span className={style.list_item__content}>{props.text}</span>
    </li>
  );
}

ListItem.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selection: PropTypes.node
};

export default ListItem;