import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
    FieldControl
 } from "react-reactive-form";
 import "./inputField.scss"

const InputField = (props) => {
    if(props.isForm){
        return (
            <div className="input-container"> 
                <FieldControl
                      name={props.name}
                      render={({handler,touched,hasError})=>(
                        <>
                            <label>{props.placeholder}</label>
                            <TextField 
                                {...handler()}
                                required id="standard-required" 
                                {...props}
                            />
                            { touched && ((hasError("minLength") && (<span style ={{color : "red", fontSize : "0.8rem" }}>Min 10 Character Required</span>)
                                ||
                                hasError("maxLength") && (<span style ={{color : "red" , fontSize : "0.8rem"}}>Max 140 Character Required</span>))) 
                            }
                        </>
                      )

                      }
                    />
                
            </div>
        );
    }
    else{
        return (
            <div className="input-container">
                <label>{props.placeholder}</label>
                <TextField 
                    {...props}
                    required id="standard-required" 
                />
            </div>
        );
    }
    
};

export default InputField;