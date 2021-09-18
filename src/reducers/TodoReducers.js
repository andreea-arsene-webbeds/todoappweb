export const Action = {
    GET: "get-todos",
    ADD: "add-todo",
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case Action.GET: {
            state = action.payload
            return action.payload
        }
        case Action.ADD: {
            state.push(action.payload)
            return [...state, action.payload]
        }
        default:
            return state;
    }
}