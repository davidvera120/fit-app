import { homeTypes } from "../Types/userTypes";

export const read1Reducer = ( state = {}, action ) => {
    switch (action.type) {
      

        case homeTypes.read1:
            return {Routines:action.payload}
            
        default:
            return state;
    }
}