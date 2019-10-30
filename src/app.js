import React from "react";
import { hot } from 'react-hot-loader/root';
import Posts from './scripts/modules/Posts';
import PostForm from './scripts/modules/PostForm';
import {Provider} from 'react-redux';
import store from './store';

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
