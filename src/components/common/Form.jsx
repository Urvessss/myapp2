import React, { Component } from 'react';
import Joi from 'joi-browser'
import Input from './Input';
import Button from './Button';

class Form extends Component {

    constructor(){
        super();
        this.state  = {
            data : { }, 
            errors : {  }
        }
    }

    handleChange = ({target:input}) => {
        //console.log(event)
        const data = { ...this.state.data}
        const errors = { ...this.state.errors }

        data[input.name] = input.value

        const errorMessage = this.validateField(input)

        if(errorMessage)
            errors[input.name] = errorMessage
        else 
            delete errors[input.name]

        this.setState({data, errors})
    }

    
    validateField = (input) => {
       
        const data = { [input.name] : input.value }
        const schema = { [input.name] : this.schema[input.name] }

        const results =  Joi.validate(data, schema)
        
        if(!results.error) return null ;

        return results.error.details[0].message;

        // if(input.name === 'email')
        //     if(input.value === '')
        //         return 'Email is required'

        // if(input.name === 'password')
        //     if(input.value === '')
        //         return 'Password is required'
    }

    validate = () => {
        //check the fields and return errors object containing appropriate messages or null 
        let errors = {} 
        const { data } = this.state;

        const results = Joi.validate(data, this.schema, { abortEarly : false } )
        //console.log(results)  

        if(!results.error) return null ;

        for(let item of results.error.details){
             errors[item.path[0]]  =  item.message
        }

        return errors;

        // if(data.email === '')
        //     errors.email = 'Email is requried'
        // if(data.password === '')
        //     errors.password = 'Password is required'
        // return Object.keys(errors).length === 0 ? null : errors;
    }

    renderInput = (label, name, value, error, type='text') => {
        return <Input 
                    label={label}
                    name={name}
                    value={value}
                    type={type}
                    error={error}
                    onChange={this.handleChange} />
    }

    renderButton = (label) => {
        return <Button label={label} />
    }

    handleSubmit  = (event) => {
        //console.log(event)
        event.preventDefault();     //cancelling the default behavior of submit event

        //code to validate the form
        const errors  = this.validate();
        this.setState({errors : errors || {} })
        
        if(errors) return;
        this.doSubmit()
    }

    render() {
        return null;
    }
}

export default Form;