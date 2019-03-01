import React, { Component } from 'react';
import './sign.css'
import { Redirect } from 'react-router-dom';
import {PATHS} from "../../constants/routes";
import SignInForm from './singInForm';
import axios from 'axios';


class SignIn extends Component {
    state = {
        redirect: false
    }
    handleSubmit = async value =>{
        try{
            const response = await axios.post('https://node--api.herokuapp.com/users/sign_up',{
                firstName: value.firstName,
                lastName: value.lastName,
                username: value.username,
                email:value.email,
                password:value.password
            })
        .then(res => {
                console.log(res.data);
                this.setState({redirectToReferrer: true});
            })
        }catch(err){
            console.error(err);
        }
    };

    render(){
        if (this.state.redirectToReferrer === true) {
            return <Redirect to={PATHS.LOGIN} />
        }
        return (
            <div>
            <SignInForm onSubmit={this.handleSubmit} />
            </div>
        );
    }

}
export default SignIn;
