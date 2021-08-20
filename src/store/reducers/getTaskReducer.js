import { ON_GET_TASK_ACTION } from "../actions/GetTaskAction"


const initialState ={
    getTask : []
 }
 
const getTaskReducer = (state = initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case ON_GET_TASK_ACTION:
            return { ...state, getTask : action.getTask}
        default :
         return state    
    }
 }
 export default getTaskReducer