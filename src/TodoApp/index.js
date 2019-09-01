import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { TodoAppBg } from "./styledComponents";
import TodoButtonComponent from "./TodoButtonComponent";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

@inject("todoStore", "todo")
@observer
class TodoApp extends Component {
  todo;
  constructor(props) {
    super(props);
    this.state = { edit: false };
  }
  handleEditChange = () => {
    this.setState({ edit: !this.state.edit });
  };
  handleTodoItemEditChange = (editTodoStatus, todo) => {
    this.setState({ edit: editTodoStatus });
    this.todo = todo;
  };
  handleClearCompleted = () => {
    this.props.todoStore.clearCompleted();
  };

  handleTodoInputChange = description => {
    this.props.todoStore.addTodo(description);
  };
  render() {
    return (
      <TodoAppBg>
        <TodoInput onTodoInput={this.handleTodoInputChange} />
        {this.state.edit ? (
          <>
            <TodoInput
              edit={this.state.edit}
              todo={this.todo}
              onTodoInput={this.handleTodoInputChange}
              onTodoEdit={this.handleEditChange}
            />
          </>
        ) : (
          ""
        )}
        <TodoList onTodoItemEdit={this.handleTodoItemEditChange} />
        <TodoButtonComponent onClearCompleted={this.handleClearCompleted} />
      </TodoAppBg>
    );
  }
}
export default TodoApp;
