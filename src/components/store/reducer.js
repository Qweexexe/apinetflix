const states =  {
    field : 'netflix',
}

export const reducer = (state = states, action) => {
    switch (action.type){
        case "GET":
            return{...state, field: action.payload}
        case "INFO":
            return {...state}
        default:
            return state
    }
}