import React from "react";
import PropTypes from "prop-types";

// Presentation component with presentation concern
const CourseList = () => {
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
        {this.props.courses.map((course) => {
          return (
            <tr key={course.title}>
              <th>1</th>
              <th>{course.title}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>;
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
