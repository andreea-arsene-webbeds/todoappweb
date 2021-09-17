import React, { useContext, useState } from 'react'
import {TodoContext} from '../contexts/TodoContext'
import {Action} from '../reducers/TodoReducers'
import uuid from 'uuid/dist/v1'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './styles/TodoAddStyles.css'

const TodoAdd = (props) => {

    const {dispatch} = useContext(TodoContext);
    const [text, setText] = useState('');

    const addTodo = (props) => {
        props.preventDefault();

        dispatch({
            type: Action.ADD,
            todo: {
                id:uuid(),
                isDone:false,
                todoText: text
            }
        });
        setText('')
    }

    return (
        <div className="container">
            <form className="form">
                <div className="header">
                    <TextField
                        className="text-field"
                        id="standard-basic"
                        label="new todo"
                        onChange={
                            (e) => {setText(e.target.value)}
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