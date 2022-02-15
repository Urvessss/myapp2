import React, { Component } from 'react';
import Button from './common/Button';
import Input from './common/Input';
import Joi  from 'joi-browser';
import Form from './common/Form';
import { login } from './../services/authService';
import { withRouter } from './common/withRouter';
class LoginFrom extends Form{
  constructor() {
    super();
    this.state = {
      data: { email: '', password: '' },
      errors: {}
    }
  }

  schema={
    email:Joi.string().email().required(),
    password:Joi.string().min(5).max(12).required()
  }

  doSubmit=async()=>{
    console.log('from submitted')
    console.log(this.state.data)
    try{
    const {email,password}=this.state.data
    const {data:token}=await login(email,password)
    alert('success')
    localStorage.setItem('token',token)
    this.props.navigate('/movies')
    }catch(ex){
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.email = ex.response.data
        this.setState({ errors })
        alert('something wrong')
      }

    }
    
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1> Login From</h1>
        <form onSubmit={this.handleSubmit} >
          {this.renderInput('Email', 'email', data.email, errors.email, 'email')}

          {this.renderInput('Password', 'password', data.password, errors.password, 'password')}

          {this.renderButton('Login')}
        </form>
      </div>
    );

  }
}

export default withRouter( LoginFrom);