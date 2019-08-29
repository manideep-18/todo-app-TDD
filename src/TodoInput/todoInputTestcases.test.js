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
});
