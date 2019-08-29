import React, { Component } from "react";
import { TodoFiltersBg, Button } from "./styledComponents";

class TodoFilters extends Component {
  handleClick = () => {
    // this.props.setApplyFilterType();
  };
  render() {
    return (
      <TodoFiltersBg>
        <Button onClick={this.handleClick}>{this.props.todoFiltersText}</Button>
      </TodoFiltersBg>
    );
  }
}
export default TodoFilters;
