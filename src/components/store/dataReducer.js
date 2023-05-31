
const dataState = {
    name : '',
    scenarist : '',
    genre : '',
    year : 0,
    rank : 0,
    img : ''
}

export const dataReducer = (state = dataState, action) =>{
    switch (action.type){
        case"GET_INFO":
            console.log(state)
             return {
        ...state,
        name: action.name,
        scenarist: action.scenarist,
        genre: action.genre,
        year: action.year,
        rank: action.rank,
                 img : action.img
      };
        default:
            return state

    }
}