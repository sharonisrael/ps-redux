import { combineReducers } from "redux";
import courses from "./courseReducer";
//import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  // this is how we will contact the reducer so we may rename to courses
  courses: courses,
});

export default rootReducer;
