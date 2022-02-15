import React, { Component } from 'react';
import Form from './common/Form';
import Joi from 'joi-browser';
import { register } from './../services/userService';
import { withRouter } from './common/withRouter';
class RegisterFrom extends Form {
  constructor() {
    super();
    this.state = {
      data: { email: '', password: '', name: '' },
      errors: {}
    }
  }
  schema = {
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(12).required(),
    name: Joi.string().required(),
  }

  doSubmit = async () => {
    console.log('from submitted')
    console.log(this.state.data)
    try {
      const response = await register(this.state.data)
      // console.log('registraion success', response)
      alert('success')
      localStorage.setItem('token', response.headers['x-auth-token'])
      this.props.navigate('/movies')
    } catch (ex) {
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

export default withRouter( RegisterFrom);