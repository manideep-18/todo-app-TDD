import { action, observable } from "mobx";

class TodoStore{
    @observable todos=[];
    @action addTodo=(description)=>{

    }
    }
export default TodoStore;