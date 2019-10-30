import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {newPost} from './actions';

class ModulePostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.titleChange = this.titleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  titleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  contentChange(e) {
    this.setState({
      body: e.target.value
    });
  }

  submitPost(e) {
    e.preventDefault();
    const {title, body} = this.state;
    this.props.newPost({
      title: title,
      body: body,
      userId: 106
    })
  }

  render() {
    return (
      <div className='post-form'>
        <h1 className="title">Post Form</h1>
        <form className="form">
          <label>Post Name</label><br/>
          <input name='title' type="text" value={this.props.title} onChange={this.titleChange}/>
          <br/>
          <br/>
          <label>Post Content</label><br/>
          <textarea name='content' value={this.props.body} onChange={this.contentChange}/>
          <br/>
          <br/>
          <button className='submit' onClick={this.submitPost}>Submit</button>
        </form>
      </div>
    );
  }
}

ModulePostForm.propTypes = {
  newPost: PropTypes.func.isRequired
};

export default connect(null ,{newPost})(ModulePostForm);
