import React, { createContext, useReducer } from 'react'
import { todoReducer } from '../reducers/TodoReducers';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {

    const initialState = {
        todoList: []
    }

    const [todoList, dispatch] = useReducer(todoReducer, initialState)

    return (
        <TodoListContext.Provider value={{ todoState: todoList, todoDispatch: dispatch }}>
            {props.children}
        </TodoListContext.Provider>
    )
}
export default TodoListContextProvider;