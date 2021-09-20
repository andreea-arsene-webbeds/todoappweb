import React, { useContext, useState } from 'react'
import { TodoListContext } from '../contexts/TodoListContext';
import {Action} from '../reducers/TodoReducers'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './styles/TodoAddStyles.css'
import DataService from '../services/TodoService'

const TodoAdd = (props) => {

    const todoListContext = useContext(TodoListContext);
    const [todoText, setTodoText] = useState('');

    const addTodo = () => {
        const todo = {
            isDone: false,
            text: todoText
        }

        if(todoText !== '') {
            DataService.create(todo)
            .then((response) => {
                todoListContext.todoDispatch({
                    type: Action.ADD,
                    payload: response.data
                });
                setTodoText('')
            })
        } else {
            alert("Field cannot be empty!");
        }

    }

    return (
        <div >
            <form className="form">
                <div className="header">
                    <TextField
                        className="text-field"
                        id="standard-basic"
                        label="new todo"
                        value={todoText}
                        onChange={
                            (e) => {setTodoText(e.target.value)}
                        } />
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        onClick={addTodo}>
                        <AddRoundedIcon></AddRoundedIcon>
                    </Button>
                </div>     
            </form>
        </div>
    );
}

export default TodoAdd;