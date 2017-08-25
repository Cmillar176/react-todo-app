import _ from "underscore";
import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import TodoForm from "../todo-form";
import TodoList from "../todo-list";
import "./stylesheets/index.scss";

class App extends React.Component {
  componentDidMount() {
    _.defer(this.props.fetchTodos);
  }

  renderLoader() {
    return <h1>LOADING!</h1>;
  }

  renderApplication() {
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

  render() {
    const content = this.props.requestInFlight === true
      ? this.renderLoader()
      : this.renderApplication();

    return (
      <div className="todo-spa__wrapper">
        {content}
      </div>
    );
  }
}

App.propTypes = {
  addTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  requestInFlight: PropTypes.bool.isRequired,
  setUserInput: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.list.isRequired,
  userInput: PropTypes.string.isRequired
};

export default App;
