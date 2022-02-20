import React, { Component } from 'react';
import Form from './common/Form';
import Joi from 'joi-browser'
import { register } from '../service/userService';
import { withRouter } from './common/withRouter';

class RegisterForm extends Form {

    constructor(){
        super();
        this.state  = {
            data : { email : '', password : '', name : '' }, 
            errors : {  }
        }
    }

    schema = {
        email : Joi.string().email().required(),
        password : Joi.string().min(5).max(12).required(), 
        name : Joi.string().required(),
    }

    doSubmit = async () => {
        //code to connect to the backend
        console.log('form submitted.')
        console.log(this.state.data)

        try{
            const response = await register(this.state.data)
            localStorage.setItem('token',response.headers['x-auth-token'])
            
            this.props.navigate('/movies')
        }catch(ex){
            if(ex.response && ex.response.data === 400){
                const errors = {...this.state.errors}
                errors.email = ex.response.data
                this.setState({errors})
            }
        }
      
        
    }

  render() {
    const { data, errors } = this.state;

        return (
            <div>
                <h1>Register Form</h1>
                <form onSubmit={this.handleSubmit}>
                   
                   { this.renderInput('Email', 'email', data.email, errors.email, 'email') }
                    
                   { this.renderInput('Password', 'password', data.password, errors.password, 'text') }

                   { this.renderInput('Name', 'name', data.name, errors.name, 'text') }
                    
                   { this.renderButton('Register') }
                   
                </form>
            </div>
        );
  }
}
export default withRouter(RegisterForm);