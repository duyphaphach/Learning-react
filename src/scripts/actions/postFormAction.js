import {NEW_POSTS} from "./types";

export const newPost = ({title, body, userId}) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: userId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json(), error => console.log(error))
    .then( (newPost) => dispatch({
      type: NEW_POSTS,
      payload: newPost
    }), error => console.log(error))
};
