import React, { Component } from 'react';
import './login.css'
import { Redirect } from 'react-router-dom';
import {PATHS} from "../../constants/routes";
import LoginInForm from './logInForm';
import axios from 'axios';



class Login extends Component {

    state = {
        redirect: false
    }

    handleSubmit = value => {
        axios.post(`https://node--api.herokuapp.com/users/sign_in`, {
            username: value.username,
            password: value.password
        })
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                this.setState({redirectToReferrer: true});
            })
    }

    render(){
        if (this.state.redirectToReferrer === true) {
            return <Redirect to={PATHS.TODOS} />
        }
        return (
            <div >
                <LoginInForm  onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
export default Login;
