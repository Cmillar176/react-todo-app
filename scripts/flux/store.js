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

    this.bindActions(actions.USER_INPUT_SET, this.setUserInput);
  },

  public: {
    getState() {
      return this.state;
    }
  },

  private: {
    setUserInput: function(state, userInput) {
      return state.set("userInput", userInput);
    }
  }
});

export default todoStore;
