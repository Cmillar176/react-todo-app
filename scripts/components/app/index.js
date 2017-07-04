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
        <TodoForm />
        <TodoList todos={myTodos} />
      </div>
    );
  }
}

export default App;
