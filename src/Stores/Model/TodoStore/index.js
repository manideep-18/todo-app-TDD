import { action, observable, computed } from "mobx";
import Todo from "../Todo";

class TodoStore{
    @observable todos=[];
    @observable applyFilterType="All";
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
    @computed get todosItemsLeft(){
        const todosItemsLeftArray=this.todos.filter(todoEach=>
            todoEach.todoIsCompleted===false
            )
        return todosItemsLeftArray.length
    } 
    }
export default TodoStore;