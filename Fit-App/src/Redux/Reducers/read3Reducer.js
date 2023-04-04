import { homeTypes3 } from "../Types/userTypes";

export const read3Reducer = ( state = {}, action ) => {
    switch (action.type) {
       
        case homeTypes3.read3:
            return {WorkoutsG:action.payload}
            
        default:
            return state;
    }
}