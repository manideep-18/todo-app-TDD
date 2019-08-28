import { action } from "mobx";
import Todo from "../Model/Todo";

class TodoStore{
    @action addTodo=(description)=>{
        const todo=new Todo();
        todo.setTodoDescription(description);
    }
}
export default TodoStore;