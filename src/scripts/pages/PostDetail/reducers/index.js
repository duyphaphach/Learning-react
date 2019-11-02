import { FETCH_POSTS } from "../constants/actions-types";

const initialState = {
 // ModulePosts to be fetched
  items: [],
};

export default function (state=initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}
