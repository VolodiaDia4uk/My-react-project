import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import { bindActionCreators } from 'redux'
import {addTodo,getById, removeTaskById, updateItem, updateCompleted, deleteDoneTasks} from "../../actions/actionCreator";
import { Checkbox ,Button } from "react-bootstrap"
import FakeAuth from '../../services/FakeAuth'
import CreateTodo from './createTodoList'

class ToDoList extends Component {
    componentDidMount(){
        this.getTodos();
        console.log('tyt')
    }

    getTodos = async ()=>{
        try{
            console.log('tyttty')
            const response = await axios.get('https://node--api.herokuapp.com/todos',{headers :{ token: localStorage.getItem('token')}});
            this.props.addTodo(response.data.data);
            console.log(response,'response')
        }
        catch(err){
            console.error(err);
        }
    };

    handleSubmit=async(value)=>{
        try{
            const response = await axios.post('https://node--api.herokuapp.com/todos',{
                    title: value.title
                },
                {headers :{ token: localStorage.getItem('token')}},

            );
            this.props.addTodo(response.data.data)
        }
        catch(err){
            console.error(err);
        }
    };

    getItemById=async(item)=>{
        console.log('asdasd item',item);
        try{
            const response = await axios.get(`https://node--api.herokuapp.com/todos/${item.id}`, {headers :{ token: localStorage.getItem('token')}})
            console.log(this.props.getById, 'tesdt');
            this.props.getById(response.data.data);
            this.props.history.push(`todos/${item.id}`)
        }
        catch(err){
            console.error(err);
        }
    };

    removeTask = async(item, key)=>{
        try{
            await axios.delete(`https://node--api.herokuapp.com/todos/${item.id}`,{headers :{
                token: localStorage.getItem('token')}
            })
                .then( () => {
                    this.props.removeTaskById(item.id, key);
                });
        }catch(err){
            console.log(err)
        }
    };
    _handleCompleteItem = async ({ id, completed }) => {
        try{
            console.log("completed ", completed);
            await axios.put(`https://node--api.herokuapp.com/todos/${id}`,{
                completed: !completed
            },
            {headers :{
                token: localStorage.getItem('token')}
            });
            this.props.updateCompleted(id, !completed);
        }catch(err){
            console.log(err)
        }
    };

    _deleteDoneTasks = () => {
        this.props.todo.forEach((item, index) => item.completed && this.removeTask(item, index));
        this.props.deleteDoneTasks();
    };

    render(){
        console.log(this.props.todo);
        return this.props.todo && (

            <div className="todo-form">

                <CreateTodo  onSubmit={this.handleSubmit}/>
                {
                     this.props.todo.map((item,index)=>{
                         return (
                             <div className='list-item' key={index} >
                                <Checkbox onChange={()=> this._handleCompleteItem(item)} checked={item.completed}/>
                                 <div className='form-item'  onClick={()=>this.getItemById(item)} >
                                     {item.completed ? <span style={{ "textDecoration": "line-through"}}>{item.title}</span> : <span>{item.title}</span>}
                                 </div>
                                  <Button  className='remove' onClick={()=>this.removeTask(item, index)}>delete</Button>
                             </div>
                         )
                     })
                }
                <div className="deletecompleted">
                <a  onClick={() => this._deleteDoneTasks()}>delete done tasks</a>
            </div>
            </div>

        )
    }
}


const mapStateToProps = ({todo}) =>{
    return {
        todo: todo.items,
        element: todo.element
    }
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({addTodo,getById,removeTaskById, updateItem, updateCompleted, deleteDoneTasks, dispatch}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);