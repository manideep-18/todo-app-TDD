import React, { Component } from "react";
import { TodoButtonBg, StyledTodoButton } from "./styledComponents";

class TodoButton extends Component {
  render() {
    return (
      <TodoButtonBg>
        <StyledTodoButton>{this.props.todoButtonText}</StyledTodoButton>
      </TodoButtonBg>
    );
  }
}
export default TodoButton;
