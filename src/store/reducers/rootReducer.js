
import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
import taskReducer from "./taskReducer";
import getTaskReducer from "./getTaskReducer";

export default combineReducers({
    commonReducer : commonReducer,
    taskReducer : taskReducer,
    getTaskReducer : getTaskReducer
})