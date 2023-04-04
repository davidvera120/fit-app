import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { userReducer } from "../Reducers/userReducer.js";
import { read1Reducer } from "../Reducers/read1Reducer.js";
import { read2Reducer } from "../Reducers/read2Reducer.js";
import { read3Reducer } from "../Reducers/read3Reducer.js";
import thunk from "redux-thunk";
import { workReducer } from "../Reducers/workReducer";
import { routineReducer } from "../Reducers/routineReducer";
import { dataReducer } from "../Reducers/dataReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: userReducer,
    addw: workReducer,
    editw: workReducer,
    readw: workReducer,
    addr: routineReducer,
    editr: routineReducer,
    readr: routineReducer,
    read1: read1Reducer,
    read2: read2Reducer,
    read3: read3Reducer,
    readData:dataReducer,
    editData:dataReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)