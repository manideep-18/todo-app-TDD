import TodoStore from ".";

describe('todoStore testsuit', () => {
    it('should test addTodo function',()=>{
        const todoStore=new TodoStore(); 
        todoStore.addTodo('mani');
    })
})
