import React, { Component } from 'react';
import { BrowserRouter, Route, Switch , Redirect } from 'react-router-dom';
import './styles/login.css';
// import getTodo from './containers/TodoLIst/getTodo'
import MainLayout from "./Layout/Main";
import Login from "./containers/Login";
import SignIn from "./containers/Sign_in";
import ToDoById from './containers/TodoLIst/toDo'
import PrivateRoute from './containers/PrivateRoute'
import ToDoList from './containers/TodoLIst/'
import { Provider } from 'react-redux'
import store from './services/store'
import FakeAuth from './services/FakeAuth'
import EditTaskForm from './containers/TodoLIst'
// import SignIn from './containers/Sign_in/SignIn'

import {PATHS} from "./constants/routes";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainLayout>
              <Switch>
                <Route exact path={PATHS.EXECT} render={()=>(
                <Redirect to={PATHS.TODOS}/>
                    )}  />
                <Route path={PATHS.SIGN_IN} component={SignIn}/>
                  <Route exact path={PATHS.LOGIN} component={Login} />
                  {/*< Route exact path={PATHS.TODOS}  render={()=>(*/}
                      {/*FakeAuth.auth() ? <ToDoList/> :  <Redirect to={PATHS.LOGIN} />*/}
                  {/*)}  />*/}
                  {/*< Route exact path={PATHS.TODOS_ID}  render={()=>(*/}
                      {/*FakeAuth.auth() ? <EditTaskForm/> :  <Redirect to={PATHS.LOGIN} />*/}
                  {/*)}  />*/}
                <PrivateRoute exact path={PATHS.TODOS} component={ToDoList} />
                <PrivateRoute exact path={PATHS.TODOS_ID} component={ToDoById} />
              </Switch>
            </MainLayout>
              </div>
        </BrowserRouter>
        </Provider>
            );
  }
}

export default App;
