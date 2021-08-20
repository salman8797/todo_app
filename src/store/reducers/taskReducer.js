import { ON_ADD_TASK_ACTION } from "../actions/AddTaskAction";


const initialState ={
    task : []
 }
 
const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case ON_ADD_TASK_ACTION:
            return { ...state, task : action.task}
            
        default :
         return state    
    }
 }
 export default taskReducer;