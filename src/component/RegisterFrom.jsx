import React, { Component } from 'react';
import Form from './common/Form';
import  Joi  from 'joi-browser';
class RegisterFrom extends Form {
    constructor() {
        super();
        this.state = {
          data: { email: '', password: '',name:'' },
          errors: {}
        }
      }
      schema={
        email:Joi.string().email().required(),
        password:Joi.string().min(5).max(12).required(),
        name:Joi.string().required(),
      }

      doSubmit=()=>{
        console.log('from submitted')
        console.log(this.state.data)
      }
    render() {
        const { data, errors } = this.state;
    return (
      <div>
        <h1> Register From</h1>
        <form onSubmit={this.handleSubmit} >
          {this.renderInput('Email', 'email', data.email, errors.email, 'email')}

          {this.renderInput('Password', 'password', data.password, errors.password, 'password')}

          {this.renderInput('Name', 'name', data.name, errors.name, 'text')}


          {this.renderButton('Resister')}
        </form>
      </div>
    );
    }
}

export default RegisterFrom;