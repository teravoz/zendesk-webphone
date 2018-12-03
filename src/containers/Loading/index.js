import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Lottie from 'react-lottie';

import { setAppHeight } from '../../actions/settings';
import * as loadingAnimation from '../../assets/loading-lottie.json';
import styles from './style.scss';

class Loading extends React.Component {

  state = {
    animation: {
      stopped: false,
      paused: false
    }
  }

  defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loadingAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  componentWillMount() {
    this.props.setAppHeight(290);
  }

  render() {
      return (
        <div className={ styles.loading }>
            <Lottie 
              options={ this.defaultOptions }
              height={ 100 }
              width={ 100 }
              isStopped={ this.state.animation.stopped }
              isPaused={ this.state.animation.paused }
            />
            <span className={ styles.mt10 }> { this.props.text || 'Só mais alguns segundos!' } </span>
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({ setAppHeight });

const mapStateToProps = ({ loading }) => ({ ...loading });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
