import React, {Component} from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
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
      content: e.target.value
    });
  }

  submitPost(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      content: this.state.content
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'applicattion/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className='post-form'>
        <h1 className="title">Post Form</h1>
        <form className="form">
          <label>Post Name</label><br/>
          <input name='title' type="text" value={this.state.title} onChange={this.titleChange}/>
          <br/>
          <br/>
          <label>Post Content</label><br/>
          <textarea name='content' value={this.state.content} onChange={this.contentChange}/>
          <br/>
          <br/>
          <button className='submit' onClick={this.submitPost}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
