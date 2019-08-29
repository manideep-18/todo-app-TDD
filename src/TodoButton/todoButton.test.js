import React from "react";
import { render } from "@testing-library/react";
import TodoButton from ".";
describe("TodoButton testsuit", () => {
  it("should test StyledTodoButton rendered in UI", () => {
    const { getByText } = render(<TodoButton todoButtonText="All" />);
    const todoButton = getByText("All");
    expect(todoButton).toBeDefined();
  });
});
