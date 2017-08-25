import connect from "../../../flux/connect";
import todoStore from "../../../flux/store";
import ActionCreator from "../../../flux/action-creator";
import APIActionCreator from "../../../flux/api-action-creator";
import App from "../index";

const stores = [todoStore];

const mapStateToProps = function() {
  const storeState = todoStore.getState();

  return {
    requestInFlight: storeState.get("requestInFlight"),
    todos: storeState.get("todos"),
    userInput: storeState.get("userInput")
  };
};

const mapDispatchToProps = function() {
  return {
    addTodo(userInput) {
      APIActionCreator.addTodo(userInput);
    },
    fetchTodos() {
      APIActionCreator.fetchTodos();
    },
    setUserInput(userInput) {
      ActionCreator.setUserInput(userInput);
    }
  };
};

export default connect(stores)(mapStateToProps, mapDispatchToProps)(App);
