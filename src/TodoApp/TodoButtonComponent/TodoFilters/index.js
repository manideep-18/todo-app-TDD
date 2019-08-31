import React, { Component } from "react";
import { TodoFiltersBg, Button } from "./styledComponents";
import { inject } from "mobx-react";
@inject("todoStore")
class TodoFilters extends Component {
  handleClick = () => {
    this.props.todoStore.setApplyFilterType(this.props.todoFiltersText);
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
