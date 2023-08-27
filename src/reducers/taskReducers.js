const initialState = {
    tasks : []
}

const taskReducers = ( state= initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, tasks:[ ... state.tasks, action.payLoad] }
        case "DELETE_TASK":
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payLoad)}
        default:
            return state
    }
}