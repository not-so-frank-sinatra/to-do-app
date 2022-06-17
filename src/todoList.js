import React, { Component } from 'react';
import Todo from './todo';
import NewTodoForm from './newTodoForm';
import './todolist.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    create(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] });
    }
    remove(id) {
        this.setState({ todos: this.state.todos.filter(todo => (todo.id !== id)) });
    }
    update(id, task) {
        this.setState({ todos: this.state.todos.map(todo => (todo.id !== id) ? todo : { ...todo, task: task }) });
    }
    toggleCompletion(id) {
        this.setState({ todos: this.state.todos.map(todo => (todo.id !== id) ? todo : { ...todo, isCompleted: !todo.isCompleted }) });
    }
    render() {
        const todos = this.state.todos.map(todo => (<Todo task={todo.task} id={todo.id} key={todo.id} isCompleted={todo.isCompleted} updateTodo={this.update} removeTodo={this.remove} toggleCompletion={this.toggleCompletion} />));
        return (
            <div className='TodoList'>
                <h1>To-do List <span>A Simple React To-do List App.</span></h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm createNew={this.create} />
            </div>
        )
    }
}

export default TodoList;