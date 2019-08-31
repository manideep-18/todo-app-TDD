import React, { Component } from "react";
import { TodoListBg } from "./styledComponents";
import { inject, observer } from "mobx-react";
import TodoItem from "./TodoItem";
@inject("todoStore", "todo")
@observer
class TodoList extends Component {
  handleTodoEditChange = (status, todo) => {
    this.props.onTodoItemChange(status, todo);
  };
  handleTodoItemDelete = todo => {
    this.props.todoStore.deleteTodo(todo);
  };
  // handleTodoComplete = todo => {
  //   todo.setTodoIsCompleted();
  // };
  displayTodoList = () => {
    const todosArray = this.props.todoStore.appliedFilterList;
    // console.log("mani", todosArray);
    const todosList = todosArray.map(eachTodo => (
      <div key={eachTodo.todoId}>
        <TodoItem
          todo={eachTodo}
          onTodoItemChange={this.handleTodoEditChange}
          onTodoItemDelete={this.handleTodoItemDelete}
        />
      </div>
    ));
    return todosList;
  };
  render() {
    return <TodoListBg>{this.displayTodoList()}</TodoListBg>;
  }
}
export default TodoList;
