import React, { Component } from 'react';
import {connect } from "react-redux"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./tabComponent.scss";
import TaskForm from '../taskForm/TaskForm';

class TabComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentTaskData :[],
      open : false,
    }
  }
  

  UNSAFE_componentWillReceiveProps(props){
    console.log(props.tasks)
  }

  formateDate(date){
    var dataDate = new Date(date)
    var formateDate = dataDate.getDate() + "-" + dataDate.getMonth() + "-" + dataDate.getFullYear()
    return formateDate 
  }
  
  editForm =(data)=>{
    this.setState({
      open : true,
      currentTaskData : data,
      
    })
  }
  handleClose =() =>{
    this.setState({
      open : false
    })
  }
  render() {
    return (
      <div className="tab-container">
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Pending</Tab>
            <Tab>Complete</Tab>
          </TabList>
      
          <TabPanel>
            <table>
              <tr>
                <th>Summary</th>
                <th>Priority</th>
                <th>Created On</th>
                <th>Due By</th>
                <th>Actions</th>
              </tr>
              {
                this.props.tasks ? this.props.tasks.map(task =>{
                  return(
                    <>
                    <tr>
                      <th style={{"text-align":"center"}} colSpan="5">{task.priority}</th>
                    </tr>
                    <tr>
                        <td>{task.summary}</td>
                        <td>{task.priority}</td>
                        <td>{this.formateDate(task.currentDate)}</td>
                        <td>{this.formateDate(task.dueDate)}</td>
                        <td className="actions"><span onClick={this.editForm.bind(this,task)} class="icon-pencil"></span> <span>{task.status}</span> <span  class="icon-bin2"></span></td>
                    </tr>
                    </>
                  )
                }) : []
              }
              
            </table>
          </TabPanel>
          <TabPanel>
            <table>
                <tr>
                  <th>Summary</th>
                  <th>Priority</th>
                  <th>Created On</th>
                  <th>Due By</th>
                  <th>Actions</th>
                </tr>
                {
                this.props.tasks ? this.props.tasks.map(task =>{
                  if(task.status === "pending"){
                    return(
                      <>
                      <tr>
                        <th style={{"text-align":"center"}} colSpan="5">{task.priority}</th>
                      </tr>
                      <tr>
                          <td>{task.summary}</td>
                          <td>{task.priority}</td>
                          <td>{this.formateDate(task.currentDate)}</td>
                          <td>{this.formateDate(task.dueDate)}</td>
                          <td className="actions"><span onClick={this.editForm.bind(this,task)} class="icon-pencil"></span> <span>{task.status}</span> <span  class="icon-bin2"></span></td>
                      </tr>
                      </>
                    )
                  }
                  
                }) : []
              }
              </table>
          </TabPanel>
          <TabPanel>
          <table>
                <tr>
                  <th>Summary</th>
                  <th>Priority</th>
                  <th>Created On</th>
                  <th>Due By</th>
                  <th>Actions</th>
                </tr>
                {
                this.props.tasks ? this.props.tasks.map(task =>{
                  if(task.status === "completed"){
                    return(
                      <>
                      <tr>
                        <th style={{"text-align":"center"}} colSpan="5">{task.priority}</th>
                      </tr>
                      <tr>
                          <td>{task.summary}</td>
                          <td>{task.priority}</td>
                          <td>{this.formateDate(task.currentDate)}</td>
                          <td>{this.formateDate(task.dueDate)}</td>
                          <td className="actions"><span onClick={this.editForm.bind(this,task)} class="icon-pencil"></span> <span>{task.status}</span> <span  class="icon-bin2"></span> </td>
                      </tr>
                      </>
                    )
                  }
                  
                }) : []
              }
              </table>
          </TabPanel>
        </Tabs>
        <TaskForm title={"Edit Task"} open={this.state.open}  handleClose ={this.handleClose} taskForm={this.state.currentTaskData}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.getTaskReducer.getTask
  }
}
export default connect(mapStateToProps)(TabComponent);