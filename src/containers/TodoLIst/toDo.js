import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { bindActionCreators } from 'redux'
import {addTodo,removeTaskById, updateItem} from "../../actions/actionCreator";
import EditTaskForm from '../TodoLIst/editTaskForm'
import { Redirect } from 'react-router-dom';
import {PATHS} from "../../constants/routes";
import {Button } from "react-bootstrap"
// import CreateTodo from './createTodoList'

class ToDoById extends Component {
    state = {
        edit: false,
        redirect:false
    };
    setRedirect = () => {
        this.setState({
            redirect: !this.state.redirect
        })
    };
    renderRedirect = () => {
        if (this.state.redirect) {
           return <Redirect to={PATHS.TODOS} />
        }
    };

    Edit = async(value) =>{
        try{
            await axios.put(`https://node--api.herokuapp.com/todos/${this.props.element.id}`,{
                title: value.taskName
            },{headers :{ token: localStorage.getItem('token')}});
            this.props.updateItem(this.props.element, value.taskName);
            this.setState({ edit: false});
        }catch(err){
            console.log(err)
        }
    };

    render(){
        console.log(this.props, 'TOTTOTOTT');
        return(
            <div  className="todo-form">
                {
                    this.state.edit ?(
                            <EditTaskForm text={this.props.element.text} onSubmit={this.Edit}/>
                    ) : <div onClick={()=>this.setState({edit: !this.state.edit})}>{this.props.element.title}
                    </div>
                }
                <div >
                    {this.renderRedirect()}
                    <Button
                        className="go_back"
                        onClick={() => this.setRedirect()}
                        type="submit">
                        Go Back
                    </Button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({todo}) =>{
    return {
        element: todo.element
    }
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({addTodo,removeTaskById, updateItem, dispatch}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoById);