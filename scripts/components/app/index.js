import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import React from "react";
import TodoForm from "../todo-form";
import TodoList from "../todo-list";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <TodoForm
          addTodo={this.props.addTodo}
          userInput={this.props.userInput}
          setUserInput={this.props.setUserInput}
        />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

App.propTypes = {
  addTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.list.isRequired,
  userInput: PropTypes.string.isRequired,
  setUserInput: PropTypes.func.isRequired
};

export default App;
