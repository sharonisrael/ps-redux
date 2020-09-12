import React from "react";
import { connect } from "react-redux";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class AuthorsPage extends React.Component {
  state = {
    author: {
      name: "",
    },
  };

  handleSubmit = (event) => {
    // prevent submit and update page
    event.preventDefault();
    //debugger;
    // dispatch action
    this.props.actions.createAuthor(this.state.author);
  };

  handleChange = (event) => {
    // ... spread operator
    let newauthor = { ...this.state.author, name: event.target.value };
    this.setState({ author: newauthor });
  };

  // map is a function which returns new array
  // iterating an array need key to keep track - set key to id
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>authors</h2>
        <p>Enter author name:</p>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.author.name}
        />
        <button type="submit" value="Save">
          Submit
        </button>
        {this.props.authors.map((author) => (
          <div key={author.name}>{author.name}</div>
        ))}
      </form>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// After reducer updates store we expect this method to be called
function mapStateToProps(state) {
  //debugger;
  // can be also author_list or authorReducer I didn't understand yet
  return {
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch),
  };
}

// connect function connects components to redux. These are container components
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(AuthorsPage);
