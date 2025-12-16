import React,{useContext, useEffect} from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {AuthContext} from './contexts/AuthContext';
import {initializeDate} from './utils/storage';
import LoginForm from './components/LoginFrom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import UserList from './components/UserList';
import'./App';

function App(){
    const {role,logout}= useContext(AuthContext);
    useEffect(()=>{
        initializeDate();
    },[]);
    if (!role){
        return <LoginForm/>;

    }

    return(
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <header>
                    <h1>Task Management App</h1>
                    <button onClick={logout}>Logout</button>
                </header>
            {role ==='admin' && <TaskForm/>}
            <TaskList />
            {role ==='admin' && <UserList/>}
            </div>
        </DndProvider>
    );
}

export default App;
