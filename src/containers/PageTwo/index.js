import React from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changePage, setAppHeight } from '../../actions'

class PageTwo extends React.Component {

    componentDidMount() {
        const height = document.getElementById('app').clientHeight
        console.log('### HEIGHT', height);
        this.props.setAppHeight(height)
    }

    render() {
        return(
            <div>
                <p>This is another page</p>

                <a style={{marginTop: '20px', display: 'block'}} href="#" onClick={() => this.props.changePage('PageOne')}>Go back</a>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changePage }, dispatch),
  setAppHeight
});

export default connect(
  null,
  mapDispatchToProps
)(PageTwo);
