import actionTypes from "./actionTypes";

// This is action creator
// It creates and action which is an object with a type and payload
// can do Objet shorthand syntax return { type: "CREATE_COURSE", course};
export function createCourse(course) {
  //debugger;
  return { type: actionTypes.CREATE_COURSE, course: course };
}
