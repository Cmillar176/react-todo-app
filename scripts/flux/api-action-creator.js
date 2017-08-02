import { APIActionCreator } from "fluxthis";
import actions from "./actions";

const apiActionCreator = new APIActionCreator({
  displayName: "todoAPIActionCreator",

  fetchTodos: {
    route: "http://localhost:4320/api/todo",
    method: "GET",
    pending: actions.FETCH_TODO_PENDING,
    success: actions.FETCH_TODO_SUCCESS
  },

  addTodo: {
    route: "http://localhost:4320/api/todo",
    method: "POST",
    pending: actions.ADD_TODO_PENDING,
    success: actions.ADD_TODO_SUCCESS,
    createRequest(userInput) {
      return {
        body: {
          text: userInput
        }
      };
    }
  }
});

export default apiActionCreator;
