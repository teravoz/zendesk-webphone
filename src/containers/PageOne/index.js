import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setAppHeight, changePage } from '../../actions'

class PageOne extends React.Component {

  componentDidUpdate() {
    const height = document.getElementById('app').clientHeight
    console.log('### HEIGHT', height);
    this.props.setAppHeight(height)
  }

  render() {
    return (
        <div>
            <p>VBsadasdassadas.</p>

            <a style={{marginTop: '20px', display: 'inline-block'}} href="#" onClick={() => this.props.changePage('PageTwo')}>Blabla</a>
        </div>
    )

  }

}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changePage }, dispatch),
  setAppHeight,
});

export default connect(
  null,
  mapDispatchToProps
)(PageOne);
