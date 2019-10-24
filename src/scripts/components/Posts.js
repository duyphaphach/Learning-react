import React, {Component} from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json(), (error) => console.log('Error happens 1'))
      .then(data => {
        this.setState({
          posts: data
        })
      })
  }

  render() {
    const posts = this.state.posts;
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

export default Posts;
