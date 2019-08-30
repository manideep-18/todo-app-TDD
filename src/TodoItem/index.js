import React, { Component } from "react";
import { TodoItemTextStrikeoff, TodoItemBg } from "./styledComponents";

class TodoItem extends Component {
  handleDoubleClick = () => {
    this.props.todoItemChange(true);
  };
  render() {
    return (
      <TodoItemBg>
        <TodoItemTextStrikeoff onDoubleClick={this.handleDoubleClick}>
          {this.props.todo.todoDescription}
        </TodoItemTextStrikeoff>
        {/* <TodoItemEditText>{this.props.todo.todoDescription}</TodoItemEditText> */}
        {/* <TodoItem onDoubleClick={this.handleDoubleClick}>
          {this.props.description}
        </TodoItem> */}
      </TodoItemBg>
    );
  }
}
export default TodoItem;
