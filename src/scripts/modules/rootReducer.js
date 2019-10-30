import {combineReducers} from 'redux';
import postReducer from './Posts/reducers';
import postFormReducer from './PostForm/reducers';

export default combineReducers({
  posts: postReducer,
  newPost: postFormReducer
})
