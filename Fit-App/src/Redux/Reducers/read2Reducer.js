import { homeTypes2 } from "../Types/userTypes";

export const read2Reducer = ( state = {}, action ) => {
    switch (action.type) {
       

        case homeTypes2.read2:
            return {Workouts:action.payload}
            
        default:
            return state;
    }
}