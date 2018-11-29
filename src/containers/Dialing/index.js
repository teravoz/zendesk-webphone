import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { setAppHeight } from '../../actions'

import styles from './style.scss';
import Select from '../../components/Select';

class Dialing extends React.Component {

  componentWillMount() {
    // Calculate the waiting time... provide an API to obtain these data.
    this.props.setAppHeight(290);
  }

  render() {
    return (
      <div className={ styles.dialing }>
        <div className={ styles.dialing__form }>
          <div className={ styles.dialing__form__item }>
            <Select 
              onSelectionChange={ () => console.log('lll') }
              items={ [ { value: '+55', label: '+55' } ] } 
              value={ '+55' }
            />
          </div>
          <div className={ styles.dialing__form__item }>
            <input className={ styles.dialing__form__item__number } type="text" placeholder="DDD + Número" />
          </div>
        </div>
      </div>
    );
  }
}

Dialing.propTypes = {
  action: PropTypes.string,
};


const mapDispatchToProps = dispatch => ({
  // ...bindActionCreators({ resetStore }, dispatch),
  setAppHeight
});

const mapStateToProps = ({ page }) => ({ page });

export default connect(
  null,
  mapDispatchToProps
)(Dialing);

