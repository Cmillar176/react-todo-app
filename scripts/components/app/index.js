import PropTypes from "prop-types";
import React from "react";
import TodoForm from "../todo-form";
import TodoList from "../todo-list";

const myTodos = ["pick up milk", "teach people react!"];

class App extends React.Component {
  componentDidMount() {
    // TODO: Make API call to fetch Todos.
  }

  render() {
    return (
      <div>
        <TodoForm
          addTodo={this.props.addTodo}
          userInput={this.props.userInput}
          setUserInput={this.props.setUserInput}
        />
        <TodoList todos={myTodos} />
      </div>
    );
  }
}

App.propTypes = {
  addTodo: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  setUserInput: PropTypes.func.isRequired
};

export default App;
