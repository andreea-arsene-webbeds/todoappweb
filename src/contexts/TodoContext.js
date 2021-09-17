import React, { createContext, useReducer, useEffect, useState } from 'react'
import { todoReducer } from '../reducers/TodoReducers';
import { getTodos } from '../services/TodoService';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todoList, done, notDone, dispatch] = useReducer(todoReducer,[])

    return (
        <TodoContext.Provider value={{ todoList, done, notDone, dispatch }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider;