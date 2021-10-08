// This file is created to integrate material-ui input fields in react-hook-form
import React from 'react'
import { TextField,Grid } from '@material-ui/core'
import { useFormContext,Controller } from 'react-hook-form'



const FormInput = ({name,label}) => {
    const {control}= useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
             
             control={control}
             defaultValue=''
             name={name}
             label={label}
             render = {({ field})=> (
                <TextField
                {...field}   // so that data from the form gets picked up
                   
                   style={{width: '90%'}}
                    label={label}
                    required
                />
            )}
            />
        </Grid>
    )
}

export default FormInput
