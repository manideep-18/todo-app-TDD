import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoButton from ".";
import TodoStore from "../Stores/Model/TodoStore";
import { Provider } from "mobx-react";
describe("TodoButton testsuit", () => {
  it("should test StyledTodoButton rendered in UI", () => {
    const todoStore = new TodoStore();
    const { getByText } = render(
      <Provider todoStore={todoStore}>
        <TodoButton todoButtonText="All" />
      </Provider>
    );
    const todoButton = getByText("All");
    expect(todoButton).toBeDefined();
  });
});
