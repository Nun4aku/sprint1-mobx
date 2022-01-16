import { makeAutoObservable } from "mobx";

class Todo {

    todos = [
        {id:1, title: 'dfs dfgsdf gsdfg sdf sdfg sdf', complited: false},
        {id:2, title: 'hgjkghjkghjkhjkhjkhjkhjkhjkdf', complited: false},
        {id:3, title: 'dh ghj fghjfg hjfgjjhklgf ser', complited: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter( todo => todo.id !== id )
    }

    compliteTodo(id) {
        this.todos = this.todos.map( todo => todo.id === id ? { ...todo, complited: !todo.complited } :todo )
    }
    
}
export default new Todo();