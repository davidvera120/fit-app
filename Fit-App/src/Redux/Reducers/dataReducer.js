import { userTypes2 } from "../Types/userTypes";

const initialState={

   Data:[]
}
export const dataReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case userTypes2.addData:
            return  {...state};

        case userTypes2.readData:
            return  {Data:action.payload};

        case userTypes2.deleter:
            return state.filter( date => date.email !== action.payload )

        case userTypes2.editData:
           
            return  {...state};
            
        default:
            return state;
    }
}