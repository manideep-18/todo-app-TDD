import React, { Component } from "react";
import {
  TodoItemTextStrikeoff,
  TodoItemBg,
  TodoItemDeleteButton
} from "./styledComponents";
import { Button } from "../TodoButton/styledComponents";

class TodoItem extends Component {
  handleDoubleClick = () => {
    this.props.todoItemChange(true);
  };
  handleClick = () => {
    // this.props.todoItemDelete(this.props.todo);
  };
  render() {
    return (
      <TodoItemBg>
        <TodoItemTextStrikeoff onDoubleClick={this.handleDoubleClick}>
          {this.props.todo.todoDescription}
        </TodoItemTextStrikeoff>
        <TodoItemDeleteButton onClick={this.handleClick}>
          delete
        </TodoItemDeleteButton>
        {/* <Button>delete</Button> */}
      </TodoItemBg>
    );
  }
}
export default TodoItem;
