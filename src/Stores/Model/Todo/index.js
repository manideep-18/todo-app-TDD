import { action, observable } from "mobx";

class Todo {
  @observable todoDescription;
  @observable todoIsCompleted
  constructor() {
    this.todoDescription = "";
    this.todoIsCompleted=false;
  }
  @action setTodoDescription = description => {
    this.todoDescription = description;
  };
  @action setTodoIsCompleted = () => {
    this.todoIsCompleted=!this.todoIsCompleted;
  };
}
export default Todo;
