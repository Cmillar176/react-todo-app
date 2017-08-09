import Immutable from "immutable";
import { ImmutableReducerStore } from "fluxthis";
import actions from "./actions";

const todoStore = new ImmutableReducerStore({
  displayName: "todoStore",

  init() {
    this.defaultState = Immutable.fromJS({
      userInput: "",
      todos: []
    });

    this.bindActions(
      actions.USER_INPUT_SET,
      this.userInputSet,
      actions.TODOS_FETCH_SUCCESS,
      this.todosFetchSuccess
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

    todosFetchSuccess: function(state, { response }) {
      const immutableResponse = Immutable.fromJS(response.body);
      return state.set("todos", immutableResponse);
    }
  }
});

export default todoStore;
