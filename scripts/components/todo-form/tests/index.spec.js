import React from "react";
import { shallow } from "enzyme";
import TodoForm from "../";

const renderComponent = function(props) {
  return shallow(<TodoForm {...props} />);
};

describe("TodoForm", () => {
  let componentWrapper;
  let addTodoSpy;
  let setUserInputSpy;

  beforeEach(() => {
    addTodoSpy = jest.fn();
    setUserInputSpy = jest.fn();

    componentWrapper = renderComponent({
      addTodo: addTodoSpy,
      setUserInput: setUserInputSpy,
      userInput: "Pick up milk"
    });
  });

  it("renders correctly", () => {
    expect(componentWrapper).toMatchSnapshot();
  });

  describe("when text is added to the input field", () => {
    let inputWrapper;

    beforeEach(() => {
      inputWrapper = componentWrapper.find("#todoText");
      inputWrapper.simulate("change", {
        target: {
          value: "Get bread"
        }
      });
    });

    it("triggers relevant callback with correct value", () => {
      expect(setUserInputSpy).toHaveBeenCalledTimes(1);
      expect(setUserInputSpy).toBeCalledWith("Get bread");
    });
  });

  describe("when the form is submitted", () => {
    let formWrapper;

    describe("when the user input is blank", () => {
      beforeEach(() => {
        componentWrapper.setProps({ userInput: "" });
        formWrapper = componentWrapper.find("form");
        formWrapper.simulate("submit", { preventDefault: jest.fn() });
      });

      it("does not trigger relevant callback", () => {
        expect(addTodoSpy).toHaveBeenCalledTimes(0);
      });
    });

    describe("when the user input is populated", () => {
      beforeEach(() => {
        componentWrapper.setProps({ userInput: "Buy vitamins" });
        formWrapper = componentWrapper.find("form");
        formWrapper.simulate("submit", { preventDefault: jest.fn() });
      });

      it("triggers relevant callback with correct value", () => {
        expect(addTodoSpy).toHaveBeenCalledTimes(1);
        expect(addTodoSpy).toBeCalledWith("Buy vitamins");
      });
    });
  });
});
