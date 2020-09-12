import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// reducer slices the store
// = initState is the default if undefined
function authorReducer(state = initialState.authors, action) {
  //debugger;
  switch (action.type) {
    case actionTypes.CREATE_AUTHOR: {
      // ... spread operator
      let newState = [...state, { ...action.author }];
      //let newState = {
      //  author_list: [...state, { ...action.author }],
      //};
      // return updated copy of state to the store. Whatever return from reducer becomes new state for this reducer
      return newState;
    }
    default:
      return state;
  }
}

export default authorReducer;
