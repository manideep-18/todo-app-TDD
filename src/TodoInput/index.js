import React, { Component } from "react";
import { TodoInputBg, TodoInputBox } from "./styledComponents";

class TodoInput extends Component {
  value = "";
  handleChange = event => {
    this.value = event.target.value;
  };
  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.value = "";
      this.props.todoInputChange();
    }
  };
  render() {
    return (
      <TodoInputBg>
        <TodoInputBox
          value={this.value}
          type="text"
          placeholder="what needs to be done..."
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </TodoInputBg>
    );
  }
}
export default TodoInput;
