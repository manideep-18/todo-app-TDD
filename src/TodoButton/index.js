import React, { Component } from "react";
import { TodoButtonBg, StyledTodoButton } from "./styledComponents";
import { inject } from "mobx-react";
@inject("todoStore")
class TodoButton extends Component {
  handleClick = () => {
    this.props.todoStore.setApplyFilterType(this.props.todoButtonText);
  };
  render() {
    return (
      <TodoButtonBg>
        <StyledTodoButton onClick={this.handleClick}>
          {this.props.todoButtonText}
        </StyledTodoButton>
      </TodoButtonBg>
    );
  }
}
export default TodoButton;
