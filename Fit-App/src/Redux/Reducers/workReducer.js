import { workTypes } from "../Types/workTypes";

const initialState={

    Workouts:[]
}

export const workReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case workTypes.addw:
            return action.payload;

        case workTypes.readw:
            return  {Workout:action.payload}
            

        case workTypes.deletew:
            return state.filter( date => date.email !== action.payload )

        case workTypes.editw:
           
            return {Workout2:action.payload};
            
        default:
            return state;
    }
}