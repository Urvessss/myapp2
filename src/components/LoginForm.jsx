import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';
import { login } from './../service/authService';
import { withRouter } from './common/withRouter';



class LoginForm extends Form {

    constructor(){
        super();
        this.state  = {
            data : { email : '', password : '' }, 
            errors : {  }
        }
    }

    schema = {
        email : Joi.string().email().required(),
        password : Joi.string().min(5).max(12).required()
    }

   
    doSubmit = async() => {
        //code to connect to the backend
        console.log('form submitted.')
        console.log(this.state.data)
       const {email,password} = this.state.data;
       const {data : token } = await login(email,password)
       localStorage.setItem('token',token)
    //    this.props.navigate('/movies')
       window.location='/movies'
       alert('success')

    }


    render() {

        const { data, errors } = this.state;

        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                   
                   { this.renderInput('Email', 'email', data.email, errors.email, 'email') }
                    
                   { this.renderInput('Password', 'password', data.password, errors.password, 'text') }
                    
                   { this.renderButton('Login') }
                   
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);
