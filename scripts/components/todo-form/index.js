import React from "react";

class TodoForm extends React.Component {
  handleInputChange(e) {}

  handleFormSubmit(e) {
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
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
