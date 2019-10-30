import {FETCH_ModulePosts} from "./../constants/actions-types";

export const fetchPost = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/ModulePosts')
    .then(response => response.json(), (error) => console.log(error))
    .then(ModulePosts => dispatch({
      type: FETCH_ModulePosts,
      payload: ModulePosts
    }))
};
