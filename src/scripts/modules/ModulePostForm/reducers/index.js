import {NEW_POST} from "../constants/action-types";

//Manage newPost slice of state
const initialState = {
  // Single post to add
  item: {}
};

export default function (state=initialState, action) {
  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}
