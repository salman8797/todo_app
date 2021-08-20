import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import ComponentGenerator from '../common/componentGenerator/ComponentGenerator';
import store from "../../store/store";
import AddTaskAction from "../../store/actions/AddTaskAction";
import "./taskForm.scss"

import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
 } from "react-reactive-form";


class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentDate : new Date()
        }
    }
    componentDidMount(){
        console.log("task",this.props)
        if(!this.taskForm.value.dueDate){
            this.taskForm.get("dueDate").setValue(new Date())
        }
        
        this.taskForm.get("currentDate").setValue(new Date());

        this.taskForm.get("summary").valueChanges.subscribe((value) => {
            this.setState({
                summary : value
            })
          })
          this.taskForm.get("description").valueChanges.subscribe((value) => {
            this.setState({
                description : value
            })
          })
          this.taskForm.get("dueDate").valueChanges.subscribe((value) => {
            this.setState({
                dueDate : value
            })
          })
          this.taskForm.get("priority").valueChanges.subscribe((value) => {
            this.setState({
                priority : value
            })
          })
          this.taskForm.get("status").valueChanges.subscribe((value) => {
            this.setState({
                status : value
            })
          })
          
    }
    componentWillReceiveProps(props){
        
        if(props.taskForm){
            this.taskForm.get("summary").setValue(props.taskForm.summary)
            this.taskForm.get("description").setValue(props.taskForm.description)
            this.taskForm.get("priority").setValue(props.taskForm.priority)
            this.taskForm.get("dueDate").setValue(new Date(props.taskForm.dueDate))
            this.taskForm.get("currentDate").setValue(props.taskForm.currentDate)
            this.taskForm.get("status").setValue(props.taskForm.status)
        }
    }
    statusData = [
        {label : "Done" ,value : "done"},
        {label : "Pending" ,value : "pending"},
        {label : "Completed" ,value : "completed"},
        {label : "Re-open" ,value : "re-open    "},

    ]
    priorityData = [
        {label : "None" ,value : "none"},
        {label : "Low" ,value : "low"},
        {label : "Medium" ,value : "medium"},
        {label : "High" ,value : "High"},

    ]
    taskForm = FormBuilder.group({
        summary: ["", [Validators.required,Validators.maxLength(140),Validators.minLength(10)]],
        description: ["", [Validators.required,Validators.maxLength(500),Validators.minLength(10)]],
        dueDate: ["", Validators.required],
        priority: ["none", Validators.required],
        status : ["pending", Validators.required],
        currentDate : []
    });

    handleSubmit = ()=>{
        store.dispatch(AddTaskAction(this.taskForm.value))
        this.props.handleClose();
    }
    rest = () =>{
        this.props.handleClose();
        this.taskForm.reset();
        
    }
    render() {
        console.log(this.taskForm.value)
        return (
            <div>
                <Modal
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{ display : "flex", justifyContent: "center", alignItems:"center",border:"unset"}}
                >
                    <div className="form-container" >
                        <FieldGroup
                            key="taskForm"
                            control={this.taskForm}
                            render={({ get, invalid }) => (
                                
                                <form onSubmit={this.handleSubmit}>
                                    {console.log(invalid)}
                                    <h3>{this.props.title}</h3>
                                    <ComponentGenerator fieldType="inputField" name="summary" isForm={true} placeholder ="Summary" value={this.taskForm.value.summary} />
                                    <ComponentGenerator fieldType="textAreaField" name="description" isForm={true}  placeholder ="Description" value={this.taskForm.value.description} />
                                    <div className="row two-field-container">
                                        <div className="col-4">
                                            <ComponentGenerator fieldType="datePickerField" name="dueDate" isForm={true} placeholder={"Due Date"} selected = {this.taskForm.value.dueDate} />   
                                        </div>
                                        <div className="col-4">
                                            <ComponentGenerator fieldType="dropDownField" name="status" isForm={true} placeholder ="Status" value={this.taskForm.value.status} data={this.statusData}/>
                                        </div>
                                        <div className="col-4">
                                            <ComponentGenerator fieldType="dropDownField" name="priority" isForm={true} placeholder ="Priority" value={this.taskForm.value.priority} data={this.priorityData}/>
                                        </div>
                                    </div>
                                    <div className="button-container">
                                        <ComponentGenerator fieldType="buttonField" name={"Cancel"} color={" secondary"}  onClick={this.rest} />
                                        <ComponentGenerator fieldType="buttonField" disabled={invalid} name={"Save"} color={"primary"} onClick={this.handleSubmit}/>
                                    </div>
                                </form>
                                )}
                        />
                        
                        

                    </div>
                    
                </Modal>
            </div>
        );
    }
}

export default TaskForm;
