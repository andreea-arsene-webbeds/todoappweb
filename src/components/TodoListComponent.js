import React, { useContext, useEffect, useState } from 'react';
import { TodoListContext } from '../contexts/TodoListContext';
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

    const [list, setList] = useState([])

     useEffect(() => {
        getTodos()
     }, [])
     
     const getTodos = () => {
        DataService.getAll()
          .then(response => {
            setList(response.data)
            todoListContext.todoDispatch({type: Action.GET, payload: response.data})
          })
          .catch(e => {
            console.log(e);
          });

      };

    const checkTodo = (id, todo, isDone) => {
        todo.done = isDone;
        DataService.update(id, todo)
        .then(() => {
            getTodos();
        })
    }

    const deleteTodo = (id) => {
        DataService.deleteTodo(id)
        .then(() => {
            getTodos();
        })
    }

    return (
        <div className="container">
            {/* <div className="count">
                <p>To do: {toDo}</p>
                <p>Done: {done}</p>
            </div> */}
                <List className="todo-list">
                    {list?.map(todo => {
                        let completed = todo.done ? "done" : "notDone";
                        return (
                            <ListItem key={todo.id} role={undefined} dense button>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={todo.done === 1}
                                        tabIndex={-1}
                                        disableRipple
                                        onClick={() => {
                                            checkTodo(todo.id, todo, !todo.done)
                                            }
                                        }
                                    />
                                </ListItemIcon>
                                <ListItemText className={completed} id={todo.id} primary={todo.text} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={() => {
                                            deleteTodo(todo.id)
                                            }
                                        }>
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