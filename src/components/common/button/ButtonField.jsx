import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonField = (props) => {
    return (
        <div>
            <Button {...props} variant="contained" color={props.color} >
                {props.icon ? <span  class={props.icon}></span> : ""}
                {props.name ? props.name : "" }
            </Button>
        </div>
    );
};

export default ButtonField;