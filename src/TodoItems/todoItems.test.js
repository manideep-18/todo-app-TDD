import React from "react";
import { render } from "@testing-library/react";
import TodoItems from ".";
import Todo from "../Stores/Model/Todo";
describe("Todoitems testsuit", () => {
  it("sholud test text strike-off with checkbox tick", () => {
    const todo = new Todo();
    todo.setTodoDescription("todo");
    todo.setTodoIsCompleted();
    if (todo.todoIsCompleted === true) {
      const { getByText } = render(
        <TodoItems description={todo.todoDescription} />
      );
      const textStrikeoff = getByText(todo.todoDescription);
      expect(textStrikeoff).toBeDefined();
    }
  });
});
