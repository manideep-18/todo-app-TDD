import React, { Component } from "react";
import { TodoItemTextStrikeoff, TodoItemsBg } from "./styledComponents";

class TodoItems extends Component {
  render() {
    return (
      <TodoItemsBg>
        <TodoItemTextStrikeoff>{this.props.description}</TodoItemTextStrikeoff>
      </TodoItemsBg>
    );
  }
}
export default TodoItems;
