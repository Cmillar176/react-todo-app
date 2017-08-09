import { APIActionCreator } from "fluxthis";
import actions from "./actions";

const apiActionCreator = new APIActionCreator({
  displayName: "todoAPIActionCreator",

  fetchTodos: {
    route: "http://localhost:4320/api/todo",
    method: "GET",
    pending: actions.TODOS_FETCH_PENDING,
    success: actions.TODOS_FETCH_SUCCESS
  },

  addTodo: {
    route: "http://localhost:4320/api/todo",
    method: "POST",
    pending: actions.TODOS_ADD_PENDING,
    success: actions.TODOS_ADD_SUCCESS,
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
