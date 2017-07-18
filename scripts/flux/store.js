import Immutable from "immutable";
import { ImmutableReducerStore } from "fluxthis";

const todoStore = new ImmutableReducerStore({
  displayName: "todoStore",

  init() {
    this.defaultState = Immutable.fromJS({
      userInput: "",
      todos: []
    });
  },

  public: {
    getState() {
      return this.state;
    }
  }
});

export default todoStore;
