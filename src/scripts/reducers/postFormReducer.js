import {NEW_POSTS} from "../actions/types";

//Manage newPost slice of state
const initialState = {
  // Single post to add
  item: {}
};

export default function (state=initialState, action) {
  switch (action.type) {
    case NEW_POSTS:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
