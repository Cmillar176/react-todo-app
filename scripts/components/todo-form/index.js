import PropTypes from "prop-types";
import React from "react";

class TodoForm extends React.Component {
  handleInputChange(e) {
    this.props.setUserInput(e.target.value);
  }

  handleFormSubmit(e) {
    this.props.addTodo(this.props.userInput);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <label htmlFor="todoText">Text</label>
          <input
            id="todoText"
            onChange={e => this.handleInputChange(e)}
            placeholder="Enter text here"
            value={this.props.userInput}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  setUserInput: PropTypes.func.isRequired
};

export default TodoForm;
