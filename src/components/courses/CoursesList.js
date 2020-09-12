import React from "react";
import PropTypes from "prop-types";

// Presentation component with presentation concern
function CoursesList(props) {
  return (
    <>
      <h3>List of courses</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>NewTitle</th>
          </tr>
          {props.courses.map((course) => {
            return (
              <tr key={course.title}>
                <th className="btn btn-light">1</th>
                <th>{course.title}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CoursesList;
