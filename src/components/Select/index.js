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
    if (this.props.disabled) {
      return;
    }
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
    
    this.state.items.forEach((item, i) => {
      const label = item.additional ? `${item.additional} ${item.label}` : item.label;
      options.push(<li key={ i } value={ item.value } 
        onClick={ () => this.onSelectionChanged(item) }> { label } </li>)
    });

    return (
      <ul className={ styles.select__options }>
        { options }
      </ul>
    )
  }

  render(){
    const{ className, disabled } = this.props;
    const{ listOpen, selected } = this.state;
    return(
      <div className={ classNames(className, styles.select, { [styles.select__open]: listOpen }) }>
        <div className={ styles.select__label } onClick={ this.onToggleList }>
          <span className={ styles.select__label__description }> { selected.description } </span>
          <label className={ classNames(styles.select__label__text, 
            { [styles.select__label__text__disabled]: disabled }) }> { selected.label } </label>
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
    description: PropTypes.string
  })).isRequired,
  onSelectionChanged: PropTypes.func,
  value: PropTypes.string
};

Select.defaultProps = {
  items: [],
  value: ''
};

export default clickOutsideHandler(Select);