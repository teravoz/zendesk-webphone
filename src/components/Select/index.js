import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import clickOutsideHandler from "react-onclickoutside";
import styles from './style.scss';

class Select extends Component {

  state = {
    listOpen: false,
    items: [],
    selected: null
  }

  handleClickOutside(e){
    this.setState({ listOpen: false });
  }

  onSelectionChanged = (selected) => {
    this.props.onSelectionChanged(selected.value);
    this.setState({ listOpen: false, selected });
  }

  onToggleList = () => {
    this.setState((prevState) => ({ listOpen: !prevState.listOpen }));
  }

  static getDerivedStateFromProps(props, state) {
    let selected = state.selected;
    if (!selected) {
      if (props.value) {
        selected = props.items.filter((item) => item.value === props.value);
        selected = (selected && selected.length > 0) && selected[0]
      }
      selected = selected || props.items[0]
    }
    return { ...state, items: props.items, selected };
  }

  items = () => {
    if (!this.state.listOpen) {
      return null;
    }

    const options = [];

    this.state.items.forEach((item, i) => options.push(
      <li key={ i } value={ item.value } onClick={ () => this.onSelectionChanged(item) }>{ item.label }</li>
    ));

    return (
      <ul className="options">
        { options }
      </ul>
    )
  }

  render(){
    const{ className } = this.props;
    const{ listOpen, selected } = this.state;
    return(
      <div className={ classNames(className, styles['select-default'], { open: listOpen }) }>
        <div className="label" onClick={ this.onToggleList }>
          { selected.label }
        </div>
        <this.items />
      </div>
    )
  }
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onSelectionChanged: PropTypes.func,
  value: PropTypes.string
};

Select.defaultProps = {
  items: [],
  value: ''
};

export default clickOutsideHandler(Select);