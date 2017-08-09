import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import TodoForm from "../todo-form";
import TodoList from "../todo-list";
import "./stylesheets/index.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="todo-spa__wrapper">
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
  setUserInput: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.list.isRequired,
  userInput: PropTypes.string.isRequired
};

export default App;
