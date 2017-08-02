import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import "./stylesheets/index.scss";

class TodoList extends React.Component {
  renderListItems(todos) {
    return todos.map(function(todo, index) {
      return <li key={`todo-${index}`}>{todo.get("text")}</li>;
    });
  }

  render() {
    const listItems = this.renderListItems(this.props.todos);

    return (
      <ol>
        {listItems}
      </ol>
    );
  }
}

TodoList.propTypes = {
  todos: ImmutablePropTypes.list.isRequired
};

export default TodoList;
