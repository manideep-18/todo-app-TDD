import React from "react";
import "./App.css";
import TodoApp from "./TodoApp";
import { Provider } from "mobx-react";
import TodoStore from "./Stores/Model/TodoStore";
import Todo from "./Stores/Model/Todo";
const todoStore = new TodoStore();
const todo = new Todo();
class App extends React.Component {
  render() {
    return (
      <>
        <Provider todoStore={todoStore} todo={todo}>
          <TodoApp />
        </Provider>
      </>
    );
  }
}

export default App;
