import React from "react";

class TodoForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(this);
    // this.props.addTodo();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="todoText">Text</label>
          <input id="todoText" placeholder="Enter text here" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
