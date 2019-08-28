import { action, observable } from "mobx";
import Todo from "../Todo";

class TodoStore{
    @observable todos=[];
    @observable applyFilterType;
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
    @action clearCompleted=()=>{
        this.todos=this.todos.filter(todoEach=>
            todoEach.todoIsCompleted===false
            )
    }
    @action setApplyFilterType=(filterType)=>{
        this.applyFilterType=filterType;
    }
    }
export default TodoStore;