
import axios from "axios"

export const ON_ADD_TASK_ACTION = "ON_ADD_TASK_ACTION ";

export  function AddTaskActionSuccess(task){
    console.log(task)
    return{
        type: ON_ADD_TASK_ACTION,
        task : task,
    }
}

export default function AddTaskAction (value){
    console.log(value);
    const body ={value}
    return dispatch =>{
        return axios
        .post("https://611fe63824d11c001762eb49.mockapi.io/task/addtask",body)
        .then(response =>{

            return AddTaskActionSuccess("added")
        })
    }
}