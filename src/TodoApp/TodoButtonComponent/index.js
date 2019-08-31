import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TodoFilters from "./TodoFilters";
import {
  TodoButtonComponentBg,
  TodoClearCompletedButton
} from "./styledComponents";
@inject("todoStore")
@observer
class TodoButtonComponent extends Component {
  render() {
    return (
      <TodoButtonComponentBg>
        {this.props.todoStore.todosItemsLeft > 0 ? (
          <>{this.props.todoStore.todosItemsLeft} items left</>
        ) : (
          ""
        )}
        <TodoFilters todoFiltersText="All" />
        <TodoFilters todoFiltersText="Active" />
        <TodoFilters todoFiltersText="Completed" />
        <TodoClearCompletedButton></TodoClearCompletedButton>
      </TodoButtonComponentBg>
    );
  }
}
export default TodoButtonComponent;
