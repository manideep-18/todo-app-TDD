import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoInput from ".";
describe("TodoInput Testsuit", () => {
  it("should test TodoInputBox is rendered", () => {
    const { getByPlaceholderText } = render(<TodoInput />);
    const todoInput = getByPlaceholderText("what needs to be done...");
    expect(todoInput).toBeDefined();
  });
  it("should test TodoInputBox handleKeyDown with value null&tab&emptytype characters", () => {
    const todoInputChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TodoInput todoInputChange={todoInputChange} />
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(todoInput, { target: { value: "  " } });
    fireEvent.keyDown(todoInput, { key: "Enter", code: 13 });
    expect(todoInputChange).toBeCalledTimes(0);
  });
  it("should test entered text to pass to parent component ", () => {
    const todoInputChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TodoInput todoInputChange={todoInputChange} />
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(todoInput, { target: { value: "learn tdd" } });
    fireEvent.keyDown(todoInput, { key: "Enter", code: 13 });
    expect(todoInputChange).toBeCalledWith("learn tdd");
  });
  it("should inputBox empty after entering text", () => {
    const todoInputChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TodoInput todoInputChange={todoInputChange} />
    );
    const todoInput = getByPlaceholderText("what needs to be done...");
    fireEvent.change(todoInput, { target: { value: "learn tdd" } });
    fireEvent.keyDown(todoInput, { key: "Enter", code: 13 });
    expect(todoInputChange).toBeCalledWith("");
  });
});
