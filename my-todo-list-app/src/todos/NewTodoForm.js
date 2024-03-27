import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './action';
import './NewTodoForm.css'

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder='Type your new'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button 
                className="new-todo-button"
                onClick={() => {
                    const isDublicateText = todos.some(todo => todo.text === inputValue);
                    if(!isDublicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
            >
                Create Todo
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispach => ({
    onCreatePressed: text => dispach(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);