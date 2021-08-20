import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {
    FieldControl
 } from "react-reactive-form";
import "./textAreaField.scss"

const TextAreaField = (props) => {
    if(props.isForm){
        return (
            <div className="textArea-container">
                <FieldControl
                    name={props.name}
                    render={({handler,touched,hasError})=>(
                      <>  
                        <label>{props.placeholder}</label>
                        <TextareaAutosize {...handler()} {...props} aria-label="empty textarea"  />
                        { touched && ((hasError("minLength") && (<span style ={{color : "red", fontSize : "0.8rem" }}>Min 10 Character Required</span>)
                                ||
                                hasError("maxLength") && (<span style ={{color : "red" , fontSize : "0.8rem"}}>Max 500 Character Required</span>))) 
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
            <div className="textArea-container" >
                <label>{props.placeholder}</label>
                <TextareaAutosize  {...props} aria-label="empty textarea"  />
            </div>
        );
    }   
    
};

export default TextAreaField;