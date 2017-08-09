import React from "react";
import PropTypes from "prop-types";
import "./stylesheets/index.scss";

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
      <div className="todo-form__wrapper">
        <h1>Add a Todo</h1>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <div className="form-group">
            <label htmlFor="todoText">Text</label>
            <input
              className="form-control"
              id="todoText"
              onChange={e => this.handleInputChange(e)}
              placeholder="Enter text here"
              type="text"
              value={this.props.userInput}
            />
          </div>
          <button className="btn btn-default" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  setUserInput: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired
};

export default TodoForm;
