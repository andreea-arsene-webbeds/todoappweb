import React, { createContext, useReducer } from 'react'
import { todoReducer } from '../reducers/TodoReducers';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
    const initialState = {
        todoList: [],
        done: 0,
        notDone: 0
    }

    const [todoListDetails, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoListContext.Provider value={{ todoState: todoListDetails, todoDispatch: dispatch }}>
            {props.children}
        </TodoListContext.Provider>
    )
}
export default TodoListContextProvider;