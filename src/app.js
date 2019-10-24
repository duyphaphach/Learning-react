import React from "react";
import { hot } from 'react-hot-loader/root';
import Posts from './scripts/components/Posts';
import PostForm from './scripts/components/PostForm';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <PostForm />
          <br/>
          <Posts />
        </div>
      </Provider>
    )
  }
}

export default hot(App);
