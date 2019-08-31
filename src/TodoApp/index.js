import React, { Component } from "react";
import { TodoAppBg } from "./styledComponents";
import TodoInput from "./TodoInput";
import { inject, observer } from "mobx-react";
import TodoList from "./TodoList";
import TodoButtonComponent from "./TodoButtonComponent";
@inject("todoStore", "todo")
@observer
class TodoApp extends Component {
  todo;
  constructor(props) {
    super(props);
    this.state = { editTodo: false };
  }
  todoItemEdit = (status, todo) => {
    this.setState({ editTodo: status });
    this.todo = todo;
  };
  addTodo = description => {
    this.props.todoStore.addTodo(description);
  };
  handleEditChange = () => {
    this.setState({ editTodo: !this.state.editTodo });
  };
  render() {
    return (
      <TodoAppBg>
        <TodoInput onTodoInputChange={this.addTodo} />
        {this.state.editTodo ? (
          <>
            <TodoInput
              edit={this.state.editTodo}
              todo={this.todo}
              onTodoInputChange={this.addTodo}
              updateEdit={this.handleEditChange}
            />
          </>
        ) : (
          ""
        )}
        <TodoList onTodoItemChange={this.todoItemEdit} />
        <TodoButtonComponent />
      </TodoAppBg>
    );
  }
}
export default TodoApp;
