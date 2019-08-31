import React from "react";
import { render } from "@testing-library/react";
import TodoButtonComponent from ".";
import TodoStore from "../../Stores/Model/TodoStore";
import { Provider } from "mobx-react";
describe("TodoButtonComponent testsuit", () => {
  it("should test ClearCompleted button rendered", () => {
    const todoStore = new TodoStore();
    const { getByText } = render(
      <Provider todoStore={todoStore}>
        <TodoButtonComponent />
      </Provider>
    );
    const ClearCompletedButton = getByText("Clear Completed");
    expect(ClearCompletedButton).toBeDefined();
  });
});
