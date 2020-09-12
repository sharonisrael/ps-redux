import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
//import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  // this is how we will contact the reducer so we may rename to courses
  courses: courses,
  authors: authors,
});

export default rootReducer;
