import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {PATHS} from "../../constants/routes";

import {reduxForm, Form, Field} from 'redux-form';
import {FormControl, FormGroup,Button} from "react-bootstrap";



class EditTaskForm extends Component{

    state = {
        redirectToReferrer: false
    }
    setRedirect = () => {
        this.setState({
            redirect: !this.state.redirect
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={PATHS.TODOS} />
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
        console.log(this.props)
        return (
            <Form onSubmit={handleSubmit}>
                <div className="add-form-wrapper">
                    <Field
                        name="taskName"
                        type="text"
                        component={this.renderTextField}
                        text='edit'
                    />
                    <Button type='submit' className="btn-add" onClick={this.handleSubmit}>edit</Button>
                    {/*<div >*/}
                        {/*{this.renderRedirect()}*/}
                        {/*<Button*/}
                            {/*className="go_back"*/}
                            {/*onClick={this.setRedirect}*/}
                            {/*type="submit">*/}
                            {/*Go Back*/}
                        {/*</Button>*/}
                    {/*</div>*/}
                </div>
            </Form>
        )
    }
}
export default reduxForm({
    form: 'editForm'
})(EditTaskForm);
