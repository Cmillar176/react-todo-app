import Immutable from "immutable";
import todoStore from "../store";
import actions from "../actions";

describe("todoStore", () => {
  const StoreTestUtils = todoStore.TestUtils;

  const setUserInput = userInput => ({
    type: actions.USER_INPUT_SET,
    payload: userInput
  });

  const todosFetchPending = () => ({
    type: actions.TODOS_FETCH_PENDING
  });

  const todosFetchSuccess = todos => ({
    type: actions.TODOS_FETCH_SUCCESS,
    payload: {
      response: {
        body: todos
      }
    }
  });

  const todosAddPending = () => ({
    type: actions.TODOS_ADD_PENDING
  });

  const todosAddSuccess = todo => ({
    type: actions.TODOS_ADD_SUCCESS,
    payload: {
      response: {
        body: todo
      }
    }
  });

  afterEach(() => {
    StoreTestUtils.reset();
  });

  describe("initial state", () => {
    let storeState;

    beforeEach(() => {
      storeState = todoStore.getState();
    });

    it("has expected default state", () => {
      expect(storeState).toEqualImmutable(
        Immutable.fromJS({
          requestInFlight: false,
          todos: [],
          userInput: ""
        })
      );
    });
  });

  describe("USER_INPUT_SET", () => {
    let storeState;

    beforeEach(() => {
      StoreTestUtils.mockDispatch(setUserInput("Hello world"));
      storeState = todoStore.getState();
    });

    it("stores user input in state tree", () => {
      expect(storeState.get("userInput")).toEqual("Hello world");
    });
  });

  describe("TODOS_FETCH_PENDING", () => {
    let storeState;

    beforeEach(() => {
      StoreTestUtils.mockDispatch(todosFetchPending());
      storeState = todoStore.getState();
    });

    it("sets requestInFlight to true", () => {
      expect(storeState.get("requestInFlight")).toEqual(true);
    });
  });

  describe("TODOS_FETCH_SUCCESS", () => {
    let storeState;

    beforeEach(() => {
      StoreTestUtils.mockDispatch(todosFetchPending());
      StoreTestUtils.mockDispatch(
        todosFetchSuccess([
          { id: "abc", text: "Get milk", completed: false },
          { id: "def", text: "Get bread", completed: true }
        ])
      );
      storeState = todoStore.getState();
    });

    it("sets requestInFlight to false", () => {
      expect(storeState.get("requestInFlight")).toEqual(false);
    });

    it("parses and stores todos", () => {
      expect(storeState.get("todos")).toEqualImmutable(
        Immutable.fromJS([
          { id: "abc", text: "Get milk", completed: false },
          { id: "def", text: "Get bread", completed: true }
        ])
      );
    });
  });

  describe("TODOS_ADD_PENDING", () => {
    let storeState;

    beforeEach(() => {
      StoreTestUtils.mockDispatch(todosAddPending());
      storeState = todoStore.getState();
    });

    it("sets requestInFlight to true", () => {
      expect(storeState.get("requestInFlight")).toEqual(true);
    });
  });

  describe("TODOS_ADD_SUCCESS", () => {
    let storeState;

    beforeEach(() => {
      StoreTestUtils.mockDispatch(todosAddPending());
      StoreTestUtils.mockDispatch(setUserInput("Hello world"));
      StoreTestUtils.mockDispatch(
        todosAddSuccess({
          id: "ghi",
          text: "Finish teaching unit testing",
          completed: true
        })
      );
      storeState = todoStore.getState();
    });

    it("sets requestInFlight to false", () => {
      expect(storeState.get("requestInFlight")).toEqual(false);
    });

    it("blanks userInput", () => {
      expect(storeState.get("userInput")).toEqual("");
    });

    it("adds todo to the stores state", () => {
      expect(storeState.get("todos")).toEqualImmutable(
        Immutable.fromJS([
          { id: "ghi", text: "Finish teaching unit testing", completed: true }
        ])
      );
    });
  });
});
