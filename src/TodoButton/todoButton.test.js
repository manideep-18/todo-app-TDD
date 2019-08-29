import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoFilters from ".";
describe("TodoButton testsuit", () => {
  it("should test StyledTodoButton rendered in UI", () => {
    const { getByText } = render(<TodoFilters todoFiltersText="All" />);
    const todoButton = getByText("All");
    expect(todoButton).toBeDefined();
  });
  it("should test StyledTodoButton handleClick function ", () => {
    const setApplyFilterType = jest.fn();
    const { getByText } = render(
      <TodoFilters
        todoFiltersText="Active"
        setApplyFilterType={setApplyFilterType}
      />
    );
    const todoButton = getByText("Active");
    fireEvent.click(todoButton);
    expect(setApplyFilterType).toBeCalled();
  });
});
