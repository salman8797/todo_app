import React, { Component,PureComponent } from 'react'
import {connect } from "react-redux"
import "./Landing.scss";
import ComponentGenerator from '../common/componentGenerator/ComponentGenerator';
import TabComponent from "../tabs/TabComponent";

import TaskForm from '../taskForm/TaskForm';
import store from '../../store/store';
import GetTaskAction from '../../store/actions/GetTaskAction';

export class Landing extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            open : false
        }
    }
    groupByData = [
        {label : "None" ,value : "none"},
        {label : "Create On" ,value : "createdOn"},
        {label : "Pending On" ,value : "pendingOn"},
        {label : "Priority" ,value : "priority"},
    ]
    componentDidMount(){
        store.dispatch(GetTaskAction())
    }
    handleOpen = () =>{
        this.setState({
            open : true
        })
    }
    handleClose = () =>{
        this.setState({
            open : false
        })
    }
    handleChange = (e) =>{
      e.preventDefault();
      this.setState({
          [e.target.name] : e.target.value
      })
    }
    render() {
        return (
            <div className="container">
                <div className="row landing-container">
                    <div className="col-12 ">
                        <header>
                            <div className="row">
                                <div className="col-12 header-container">
                                    <h2>ToDo App</h2>
                                    <ComponentGenerator fieldType="buttonField"   onClick= {this.handleOpen} color={"primary"} icon={"icon-plus"}/>
                                </div>
                            </div>
                        </header>
                        <section>
                            <div className="row">
                                <div className="col-3 group-by">
                                        <ComponentGenerator fieldType="dropDownField" name="groupBy" placeholder = "Group By" isForm ={false} data={this.groupByData} onChange={this.handleChange}/>
                                        
                                </div>
                                <div className="col-9 search">
                                        
                                        <ComponentGenerator fieldType="inputField" name="search" placeholder="Search" isForm ={false} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <TabComponent />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    
                                    <TaskForm title={"Add Task"} open={this.state.open} handleOpen={this.handleOpen} handleClose ={this.handleClose} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        reducerValue: state.commonReducer
    }
}
export default connect(mapStateToProps)(Landing);



