export const Action = {
    GET: "get-todos",
    ADD: "add-todo",
    CHECK: "check-todo"
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case Action.GET: {
            state.todoList = action.payload
            console.log("reducer", state)
            return action.payload
        }
        case Action.ADD: {
            state.push(action.payload)
            return [...state, action.payload]
        }
        case Action.CHECK: {
            console.log(action.payload, state)
            state.done = action.payload[0]
            state.notDone = action.payload[1]
            return state
        }
        default:
            return state;
    }
}