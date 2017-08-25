import React from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import "./stylesheets/index.scss";

class TodoList extends React.Component {
  renderList() {
    const listItems = this.props.todos.map((todo, index) => {
      return (
        <li className="todo-list__list-item" key={index}>
          {todo.get("text")}
        </li>
      );
    });

    return (
      <ol className="todo-list__list">
        {listItems}
      </ol>
    );
  }

  renderEmptyMessage() {
    return <p>There are no todos!</p>;
  }

  render() {
    const content = this.props.todos.size === 0
      ? this.renderEmptyMessage()
      : this.renderList();

    return (
      <div className="todo-list__container">
        <h1 className="todo-list__heading">Todos</h1>
        {content}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: ImmutablePropTypes.list.isRequired
};

export default TodoList;
