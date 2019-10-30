import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPost} from "./actions";

class ModulePosts extends Component {
  // Run before component get inject to DOM tree
  componentWillMount() {
    this.props.fetchPost();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.newPost) {
      this.props.ModulePosts.unshift(nextProps.newPost);
    }
  }

  render() {
    const ModulePosts = this.props.ModulePosts;
    return (
      <div className="ModulePosts">
        <h1 className="title">Post List</h1>
        <ul className='ModulePosts'>
          {
            ModulePosts.map((post, key) => {
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

ModulePosts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  ModulePosts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ModulePosts: state.ModulePosts.items,
  newPost: state.newPost.item
});

export default connect(mapStateToProps, {fetchPost})(ModulePosts);


