export const Action = {
    GET: "get-todos",
    ADD: "add-todo",
    CHECK: "check-todo",
    DELETE: "delete-todo"
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case Action.GET: {
            console.log("reducer", action.payload)
            state = action.payload
            return action.payload
        }
        case Action.ADD: {
            return [...state, action.todo]
        }
        case Action.CHECK:
            let todoIndex = state.findIndex(t => t.id === action.todo.id);
            state[todoIndex].isDone = action.todo.isDone
            return state.filter(todo => todo.id !== action.id);

        case Action.DELETE: {
            return state.filter(todo => todo.id !== action.id)
        }
        //add UPDATE action
        default:
            return state;
    }
}