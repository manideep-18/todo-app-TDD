import React, { Component } from "react";
import {
  TodoItemTextStrikeoff,
  TodoItemBg,
  TodoItemDeleteButton,
  TodoActiveText,
  CheckBox,
  TodoEachItemBg
} from "./styledComponents";
import { observer, inject } from "mobx-react";
inject("todo");
@observer
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { click: false, delete: "false" };
  }
  handleCheckBoxClick = () => {
    this.props.todo.setTodoIsCompleted();
    this.setState({ click: !this.state.click });
  };
  handleDoubleClick = () => {
    this.props.onTodoItemChange(true, this.props.todo);
  };
  handleClick = () => {
    // this.setState({ delete: !this.state.delete });
    // alert("Are you sure");
    if (window.confirm("Are you sure"))
      this.props.onTodoItemDelete(this.props.todo);
  };
  renderActive = () => {
    return (
      <TodoEachItemBg>
        <CheckBox
          type="checkbox"
          onChange={this.handleCheckBoxClick}
          checked={this.state.click}
        />
        <TodoActiveText onDoubleClick={this.handleDoubleClick}>
          {this.props.todo.todoDescription}
        </TodoActiveText>
        <TodoItemDeleteButton onClick={this.handleClick}>
          delete
        </TodoItemDeleteButton>
      </TodoEachItemBg>
    );
  };
  renderCompleted = () => {
    return (
      <TodoEachItemBg>
        <CheckBox
          type="checkbox"
          onChange={this.handleCheckBoxClick}
          checked={this.state.click}
        />
        <TodoItemTextStrikeoff>
          {this.props.todo.todoDescription}
        </TodoItemTextStrikeoff>
        <TodoItemDeleteButton onClick={this.handleClick}>
          delete
        </TodoItemDeleteButton>
      </TodoEachItemBg>
    );
  };
  displayTodo = () => {
    // console.log(this.props.todo.todoIsCompleted);
    if (this.props.todo.todoIsCompleted) {
      return this.renderCompleted();
    } else {
      return this.renderActive();
    }
  };
  render() {
    // console.log("mani8", this.props.eachTodo.todoId);
    return <TodoItemBg>{this.displayTodo()}</TodoItemBg>;
  }
}
export default TodoItem;
