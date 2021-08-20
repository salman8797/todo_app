
import axios from "axios"

export const ON_GET_TASK_ACTION ="ON_GET_TASK_ACTION"

export  function GetTaskActionSuccess(getTask){
    return{
        type: ON_GET_TASK_ACTION,
        getTask : getTask,
    }
}

export default function GetTaskAction (){
    return dispatch =>{
        return axios
        .get("https://611fe63824d11c001762eb49.mockapi.io/task/gettask")
        .then(response =>{
            return dispatch(GetTaskActionSuccess(response.data))
        })
        .catch (error =>{
            return error
        })
    }
}