
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import {
    FieldControl
 } from "react-reactive-form";
import "./datePickerField.scss";

const DatePickerField= (props) => {
    
    if(props.isForm){
        return (
            <div className="date-container">
                <FieldControl
                    name={props.name}
                    render={({handler})=>(
                        <>
                            <label>{props.placeholder}</label>
                            <DatePicker  {...handler()} {...props} selected={props.selected} />
                        </>
                        
                    )
                    }
                />
                
            </div>
            
          );
    }
    else{
        return (
            <div className="date-container">
                <label>{props.placeholder}</label>
                <DatePicker  {...props} selected={props.selected} />
            </div>
          );
    }
    
}

export default  DatePickerField;