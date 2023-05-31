import {combineReducers, createStore} from "redux";
import {reducer} from "./reducer";
import {dataReducer} from "./dataReducer"



const combinedRedusers = combineReducers({
    reducer : reducer,
    data : dataReducer
})

export const store = createStore(combinedRedusers)