import { routineTypes } from "../Types/routineTypes";

export const routineReducer = ( state = {}, action ) => {
    switch (action.type) {
        case routineTypes.addr:
            return action.payload;

        case routineTypes.readr:
            return  {Routine2:action.payload}

        case routineTypes.deleter:
            return state.filter( date => date.email !== action.payload )

        case routineTypes.editr:
           
            return action.payload;
            
        default:
            return state;
    }
}