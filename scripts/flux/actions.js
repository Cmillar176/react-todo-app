import { ConstantCollection } from "fluxthis";

const actions = new ConstantCollection(
  "USER_INPUT_SET",
  "ADD_TODO_PENDING",
  "ADD_TODO_SUCCESS",
  "FETCH_TODO_PENDING",
  "FETCH_TODO_SUCCESS"
);

export default actions;
