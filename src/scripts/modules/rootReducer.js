import {combineReducers} from 'redux';
import postReducer from './ModulePosts/reducers';
import ModulePostFormReducer from './ModulePostForm/reducers';

export default combineReducers({
  ModulePosts: postReducer,
  newPost: ModulePostFormReducer
})
