import {combineReducers} from 'redux';
import ModulePostsReducer from './ModulePosts/reducers';
import ModulePostFormReducer from './ModulePostForm/reducers';

export default combineReducers({
  posts: ModulePostsReducer,
  newPost: ModulePostFormReducer
})
