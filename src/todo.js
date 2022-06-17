import React, { Component } from 'react';
import './todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { task: this.props.task, isEditing: false };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCompletion = this.handleCompletion.bind(this);
    }
    handleCompletion() {
        this.props.toggleCompletion(this.props.id);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.toggleEdit();
    }
    toggleEdit = () => this.setState({ isEditing: !this.state.isEditing });

    render() {
        let editState;
        if (this.state.isEditing)
            editState = (<div className='Todo'>
                <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                    <input type='text' placeholder={this.props.task} name='task' onChange={this.handleChange}></input>
                    <button>Save</button>
                </form>
            </div>);
        else
            editState = (<div className='Todo'>
                <li onClick={this.handleCompletion} className={this.props.isCompleted ? 'Todo-task completed' : 'Todo-task'}>{this.props.task}</li>
                <div className='Todo-buttons'>
                    <button onClick={this.toggleEdit}><i class='fas fa-pen' /></button>
                    <button onClick={this.handleRemove}><i class='fas fa-trash' /></button>
                </div>
            </div>);
        return editState;
    }
}

export default Todo;