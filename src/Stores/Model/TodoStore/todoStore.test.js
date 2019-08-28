import TodoStore from ".";

describe('TodoStore testsuit', () => {
    it('should test addTodo function',()=>{
        const todoStore=new TodoStore();
        todoStore.addTodo('mani');
        expect(todoStore.todos.length).toBe(1);
        expect(todoStore.todos[0].todoDescription).toBe('mani');
    })
})
