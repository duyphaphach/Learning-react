import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class PostDetail extends Component {
  // Run before component get inject to DOM tree
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: '',
  //     body: ''
  //   }
  // }
  //
  // componentDidMount() {
  //   const id = this.props.match.params.id;
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then(res => {
  //       const {title, body} = res.data;
  //       this.setState({
  //         title, body
  //       })
  //     })
  // }

  render() {
    return (
      <div>
        <div className="title">zxczxc</div>
        <div className="text">xczxczxc</div>
      </div>
    )
  }
}

PostDetail.propTypes = {};

export default connect()(PostDetail);


