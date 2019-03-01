import React, { Component } from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import {FormControl, FormGroup,Button} from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import './login.css'
import {PATHS} from "../../constants/routes";
import {password, required} from "../../helpers/validator"

import 'bootstrap/dist/css/bootstrap.min.css';
class LoginInForm extends Component{

    state={
        redirect:false,
        username:'',
        password:''

    }
    handleChangeUsername = event => {
        this.setState({username: event.target.value });
    }
    handleChangePassword = event => {
        this.setState({password: event.target.value });
    }

    setRedirect = () => {
        this.setState({
            redirect: !this.state.redirect
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={PATHS.SIGN_IN} />
        }
    }

    renderTextField =(props)=>{
            const {
                input,
                type,
                text,
                ...custom
            } = props;
        return(
            <FormGroup
                {...custom}
                {...input}
            >
                <FormControl
                    type={type}
                    placeholder={text}
                />
            </FormGroup>
        )
    };

    render() {
        const{ handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit} className="login-form">
                <label  className="text-info">Login</label>
                <Field
                    onChange={this.handleChangeUsername}
                    className="name-form"
                    name="username"
                    type="text"
                    component={this.renderTextField}
                    text="Enter your name"
                    validate={required}
                />

                <Field
                    onChange={this.handleChangePassword}
                    className="password-form"
                    name="password"
                    type="password"
                    component={this.renderTextField}
                    text="Enter password"
                    validate={[required,password]}
                />

                <Button
                    type="submit"
                    className="btn-login-form"
                >
                    Login
                </Button>
                <div >
                    {this.renderRedirect()}
                    <Button
                     className="btn-redirect-sign"
                        onClick={this.setRedirect}

                        type="submit">
                        Sign in
                    </Button>
                </div>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'FilterForm',
})(LoginInForm);