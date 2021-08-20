import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
    FieldControl
 } from "react-reactive-form";
 import "./dropDownField.scss"

const DropDownField = (props) => {
    if(props.isForm){
        return (
            <div className="dropDown-container">
                <FieldControl
                      name={props.name}
                      render={({handler})=>(
                         <> 
                            <label>{props.placeholder}</label>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                {...handler()}
                                {...props}
                                value={props.value}
                            >
                                {
                                    props.data.map(items =>{
                                       return <MenuItem value={items.value}>{items.label}</MenuItem>
                                    })
                                }
                            </Select>
                        </>
                      )

                      }
                    />
                
            </div>
        );
    }
    else{
        return (
            <div className="dropDown-container">
                <label>{props.placeholder}</label>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    {...props}
                    defaultValue={"priority"}
                >
                    {
                                    props.data.map(items =>{
                                       return <MenuItem value={items.value}>{items.label}</MenuItem>
                                    })
                                }
                </Select>
            </div>
        );
    }
    
};

export default DropDownField;