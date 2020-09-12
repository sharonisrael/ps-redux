import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  handleSubmit = (event) => {
    // prevent submit and update page
    event.preventDefault();
    //debugger;
    // dispatch action
    this.props.actions.createCourse(this.state.course);
  };

  handleChange = (event) => {
    let newCourse = { ...this.state.course, title: event.target.value };
    this.setState({ course: newCourse });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <p>Enter course name:</p>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <button type="submit" value="Save">
          Submit
        </button>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// After reducer updates store we expect this method to be called
function mapStateToProps(state) {
  //debugger;
  // can be also course_list or courseReducer I didn't understand yet
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

// connect function connects components to redux. These are container components
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);
