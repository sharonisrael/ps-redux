import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// reducer slices the store
// = initState is the default if undefined
function courseReducer(state = initialState.courses, action) {
  //debugger;
  switch (action.type) {
    case actionTypes.CREATE_COURSE: {
      // ... spread operator
      let newState = [...state, { ...action.course }];
      //let newState = {
      //  course_list: [...state, { ...action.course }],
      //};
      // return updated copy of state to the store. Whatever return from reducer becomes new state for this reducer
      return newState;
    }
    default:
      return state;
  }
}

export default courseReducer;
