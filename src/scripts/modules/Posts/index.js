import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPost} from "./actions";

class Posts extends Component {
  // Run before component get inject to DOM tree
  componentWillMount() {
    this.props.fetchPost();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const posts = this.props.posts;
    return (
      <div className="posts">
        <h1 className="title">Post List</h1>
        <ul className='posts'>
          {
            posts.map((post, key) => {
              return (
                <li key={post.id}>
                  <div className="title">{post.title}</div>
                  <div className="text">{post.body}</div>
                </li>
              )
            })
          }
          <div className="title">{}</div>
        </ul>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.newPost.item
});

export default connect(mapStateToProps, {fetchPost})(Posts);


