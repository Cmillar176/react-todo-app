import Immutable from "immutable";
import { ImmutableReducerStore } from "fluxthis";
import actions from "./actions";

const todoStore = new ImmutableReducerStore({
  displayName: "todoStore",

  init() {
    this.defaultState = Immutable.fromJS({
      requestInFlight: false,
      todos: [],
      userInput: ""
    });

    this.bindActions(
      actions.USER_INPUT_SET,
      this.userInputSet,
      actions.TODOS_FETCH_PENDING,
      this.todosFetchPending,
      actions.TODOS_FETCH_SUCCESS,
      this.todosFetchSuccess,
      actions.TODOS_ADD_PENDING,
      this.todosAddPending,
      actions.TODOS_ADD_SUCCESS,
      this.todosAddSuccess
    );
  },

  public: {
    getState() {
      return this.state;
    }
  },

  private: {
    userInputSet: function(state, userInput) {
      return state.set("userInput", userInput);
    },

    todosFetchPending: function(state) {
      return state.set("requestInFlight", true);
    },

    todosFetchSuccess: function(state, { response }) {
      return state.merge({
        requestInFlight: false,
        todos: Immutable.fromJS(response.body)
      });
    },

    todosAddPending: function(state) {
      return state.set("requestInFlight", true);
    },

    todosAddSuccess: function(state, { response }) {
      const immutableTodo = Immutable.fromJS(response.body);
      const updatedTodos = state.get("todos").push(immutableTodo);

      return state.merge({
        requestInFlight: false,
        todos: updatedTodos,
        userInput: ""
      });
    }
  }
});

export default todoStore;
