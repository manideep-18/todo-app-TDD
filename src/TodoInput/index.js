import React, { Component } from "react";
import { TodoInputBg, TodoInputBox } from "./styledComponents";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleKeyDown = event => {
    const str = this.state.value.trim();
    if (event.key === "Enter") {
      if (str !== "") {
        this.props.todoInputChange(this.state.value);
        this.setState({ value: "" });
      }
    }
  };
  render() {
    return (
      <TodoInputBg>
        <TodoInputBox
          value={this.state.value}
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
