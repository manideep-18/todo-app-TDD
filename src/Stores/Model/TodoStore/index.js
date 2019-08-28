import { action, observable } from "mobx";
import Todo from "../Todo";

class TodoStore{
    @observable todos=[];
    @action addTodo=(description)=>{
        const todo=new Todo();
        todo.setTodoDescription(description);
        this.todos.push(todo);
    }
    @action deleteTodo=(todo)=>{
        this.todos=this.todos.filter(todoEach=>
            todoEach.todoDescription!==todo.todoDescription
            )
    }
    }
export default TodoStore;