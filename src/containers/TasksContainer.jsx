
import './styles/TasksContainer.css'
import { useState } from 'react';
import { Taskcard } from '../components';

const TasksContainer = ({categories, tasks}) => {


    return (
        <div className="tasks-container">
            {
                tasks.map((task,index) => <Taskcard key={index} task={task} categories={categories.filter(cat => task.categories.includes(cat.id))}/>)
            }
        </div>
    )

};

export default TasksContainer