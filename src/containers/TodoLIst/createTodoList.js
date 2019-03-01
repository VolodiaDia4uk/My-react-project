import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {PATHS} from "../../constants/routes";
import {reduxForm, Form, Field} from 'redux-form';
import {FormControl, FormGroup,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.css'

class CreateTodo extends Component{

    state={
        redirect:false,

    }

    setRedirect = () => {
        localStorage.removeItem("token");
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
                controlId="formBasicText"
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
        const {handleSubmit} = this.props;
        return (
            <React.Fragment>
                <div >
                    {this.renderRedirect()}
                    <button
                        className="logout"
                        onClick={this.setRedirect}
                        type="submit">
                        Logout
                    </button>
                </div>
            <Form onSubmit={handleSubmit} >
                <label className="texte-info">Create Todo</label>
                <div className="add-form-wrapper">
                    <Field
                        className="namee-form"
                        name="title"
                        type="text"
                        component={this.renderTextField}
                        text="add"
                    />

                <Button type='submit' className="btn-add" onClick={this.handleSubmit}>ADD</Button>
                </div>


            </Form>
            </React.Fragment>
        )
    }
}
export default reduxForm({
    form: 'FilterForm',
})(CreateTodo);
