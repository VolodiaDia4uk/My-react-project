import React, { Component } from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import {FormControl, FormGroup,Button} from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import {PATHS} from "../../constants/routes";

import 'bootstrap/dist/css/bootstrap.min.css';
import './sign.css'


class SignInForm extends Component{

    state={
        redirect:false,

    }

    setRedirect = () => {
        this.setState({
            redirect: !this.state.redirect
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={PATHS.LOGIN} />
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
            <Form onSubmit={handleSubmit} className="filter-form-wrapper">
                <label  className="text-info">Registration</label>
                <Field
                    onChange={this.handleChangeUsername}
                    className="form-text"
                    name="firstName"
                    component={this.renderTextField}
                   type="text"
                    text="FirstName"
                />
                <Field
                    onChange={this.handleChangePassword}
                    className="form-text"
                    name="lastName"
                    type="text"
                    component={this.renderTextField}
                    text="LastName"
                />
                <Field
                    onChange={this.handleChangePassword}
                    className="form-text"
                    name="username"
                    type="text"
                    component={this.renderTextField}
                    text="userName"
                />
                <Field
                    className="form-text"
                    name="email"
                    type="email"
                    component={this.renderTextField}
                    text="Enter e-mail"
                />

                <Field
                    className="form-text"
                    name="password"
                    type="password"
                    component={this.renderTextField}
                    text="Enter password"
                />
                <Field
                    className="form-text"
                    name="confirmPassword"
                    type="password"
                    component={this.renderTextField}
                    text="Confirm password"
                />
                <Button
                    type="submit"
                className="btn-sign-form"
                >
                    Sign in
                </Button>
                <div >
                    {this.renderRedirect()}
                    <Button
                        className="btn-redirect-login"
                        onClick={this.setRedirect}

                        type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'FilterForm',
})(SignInForm);