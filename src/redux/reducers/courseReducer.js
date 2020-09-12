// can be
const initState = [];
//const initState = {
//  course_list: [],
//};

// = initState is the default if undefined
function courseReducer(state = initState, action) {
  //debugger;
  switch (action.type) {
    case "CREATE_COURSE": {
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
