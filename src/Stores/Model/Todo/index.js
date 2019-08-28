import { action, observable } from "mobx";

class Todo {
  @observable todoDescription;
  @observable todoIsCompleted=false;
  constructor() {
    this.todoDescription = "";
  }
  @action setTodoDescription = description => {
    this.todoDescription = description;
  };
  @action setTodoIsCompleted = () => {
    this.todoIsCompleted=!this.todoIsCompleted;
  };
}
export default Todo;
