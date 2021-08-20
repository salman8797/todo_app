import React from 'react';
import InputField from '../input/InputField';
import TextAreaField from '../textArea/TextAreaField';
import DropDownField from '../dropDown/DropDownField';
import DatePickerField from '../datePicker/DatePickerField';
import ButtonField from '../button/ButtonField';

const ComponentGenerator = (props) =>{
    return(<React.Fragment>
        {
            {
                inputField :(
                    <InputField {...props}/>
                ),
                textAreaField :(
                    <TextAreaField {...props}/>
                ),
                dropDownField :(
                    <DropDownField {...props}/>
                ),
                datePickerField : (
                    <DatePickerField {...props}/>
                ),
                buttonField : (
                    <ButtonField {...props}/>
                ),
            }[props.fieldType]
        }
    </React.Fragment>)
}

export  default ComponentGenerator;