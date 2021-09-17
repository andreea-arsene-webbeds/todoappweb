import React, { useContext, useEffect, useState } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
import { TodoContext } from '../contexts/TodoContext';
import { Action } from '../reducers/TodoReducers'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import './styles/TodoListStyles.css'
import DataService from '../services/TodoService'


const TodoList = (props) => {

    const todoListContext = useContext(TodoListContext)
    const todoContext = useContext(TodoContext)

    const [list, setList] = useState([])
    const [todo, setTodo] = useState({})

     useEffect(() => {
        getTodos()
     }, [])
     
     const getTodos = () => {
        DataService.getAll()
          .then(response => {
            console.log(response.data);
            setList(response.data)
            todoListContext.todoDispatch({type: Action.GET, payload: response.data})
          })
          .catch(e => {
            console.log(e);
          });

      };

    const checkTodo = (id, isDone) => {
        todoContext.dispatch({
            type: Action.CHECK,
            todo: {
                id,
                isDone
            }
        }, console.log("checktodo", isDone))
    }

    return (
        <div className="container">
            {/* <div className="count">
                <p>To do: {toDo}</p>
                <p>Done: {done}</p>
            </div> */}
                <List className="todo-list">
                    {list?.map(todo => {
                        let completed = todo.isDone ? "done" : "notDone";
                        return (
                            <ListItem key={todo.id} role={undefined} dense button>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={todo.done === 1}
                                        tabIndex={-1}
                                        disableRipple
                                        onClick={() => {
                                            checkTodo(todo.id, !todo.isDone)
                                            }
                                        }
                                    />
                                </ListItemIcon>
                                <ListItemText className={completed} id={todo.id} primary={todo.text} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end">
                                        <DeleteForeverRoundedIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        );
                    })}
                </List>
        </div>
    );
}

export default TodoList;