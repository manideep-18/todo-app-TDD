import React, { Component } from "react";
import { TodoInputBg, TodoInputBox } from "./styledComponents";

class TodoInput extends Component {
  value = "";
  handleChange = event => {
    this.value = event.target.value;
  };
  handleKeyDown = event => {
    this.value = this.value.trim();
    if (event.key === "Enter") {
      if (this.value !== "") {
        this.props.todoInputChange(this.value);
      }
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
