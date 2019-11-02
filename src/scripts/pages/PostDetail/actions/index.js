import {FETCH_POSTS} from "./../constants/actions-types";

export const fetchPost = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/ModulePosts')
    .then(response => response.json(), (error) => console.log(error))
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
};
