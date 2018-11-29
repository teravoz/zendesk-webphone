import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';


class Select extends Component {
  state = {
    menu: false
  }

  dropdownClick = (e) => {
    this.setState({ menu: !this.state.menu })
  }

  optionClick = (val) => () => {
    const name = this.props.input.name;
    this.props.form.mutators.setValue(name, val)
  }

  selectField = () => {
    const { input, label, required, disabled, value } = this.props;
    const rotateIconUp = this.state.menu ? styles.rotateIconUp : '';

    let opacityCss, cursorCss;
    if (disabled) {
      opacityCss = styles.disabled;
      cursorCss = styles.cursorDefault;
    }

    const iconCss = styles.selectIcon + ' ' + styles.right + ' ' + opacityCss + ' ' + rotateIconUp;

    return (
      <div className={ styles.select + ' ' + cursorCss }>
        <span className={ opacityCss }>{ input.value || '' }</span>
        <input className={ styles.hiddenInput }
          value={ value }
          type="text"
          disabled={ disabled }
          required={ required } />
        <label className={ styles.label } >{label }</label>
        <ArrowDropDown className={ iconCss } onClick={ this.dropdownClick.bind(this) } />
      </div>
    )
  }

  selectOption = () => {
    const { options } = this.props;
    const dropdownCss = this.state.menu ? styles.show : styles.hide;
    return (
      <ul className={ styles.dropdownMenu + ' ' + dropdownCss }>
          { options.length > 0 ? options.map(({ value, description }, i) => (
            <li
              onClick={this.optionClick(value).bind(this)}
              key={ i }
              id={ value }>{ description }
            </li>
          )) : <li></li>
          }
      </ul>
    )
  }

  render() {
    const { meta, disabled } = this.props;
    let clickFn;
    if (!disabled) {
      clickFn = this.dropdownClick.bind(this);
    }

    return (
      <div className={ styles.group }>
        <div className={ styles.dropdown } onClick={ clickFn } >
          <this.selectField />
          <this.selectOption />
          <span className={ styles.highlight }></span>
          <span className={ styles.bar }></span>
          <span className={ styles.error }> { meta.touched ? meta.error : '' } </span>
        </div>
      </div>
    );
  }
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  position: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  error: PropTypes.string,
  icon: PropTypes.object,
  iconOnAction: PropTypes.object
}

export default Select;