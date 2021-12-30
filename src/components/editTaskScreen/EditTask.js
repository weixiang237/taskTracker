import React, { useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const placeHolder = 'sjdklajslkdjasdljalsdjl'

export default function EditTask(props){
    const {editTaskOn,
        taskId,
        taskTitle,
        taskDescription,
        day,
        assignedTo,
        status,
        expectedTime,
        actualTime,
        note,} = props.editTaskProps;
    const startDate = props.startDate;
    const dueDate = props.dueDate;
    //console.log(props)
    console.log('EditTask re-rendered')

    return(
        <div className='EditTaskScreen'>
            <form className='EditTaskForm'>
                {taskId !== null ?
                <label>
                    Task ID: {taskId}
                </label>:null
                }
                <br/>
                <label>Task Title:
                    <input type='text' name='taskTitle'value={taskTitle} onChange={(e)=>props.handleEditTaskChange(e)}/> 
                </label>
                <br/>
                <label>Description:
                    <input type='text' name='taskDescription'value={taskDescription} onChange={(e)=>props.handleEditTaskChange(e)}/> 
                </label>
                <br/>
                <label>
                    Day: 
                    <select name='day' value={day} onChange={(e)=>props.handleEditTaskChange(e)}>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </select>                      
                </label>
                <br/>
                <label>
                    Assinged to: 
                    <input type='text' name='assignedTo' value={assignedTo} onChange={(e)=>props.handleEditTaskChange(e)}/>
                </label>
                <br/>
                <label>
                    Status: 
                    <select name='status'value={status} onChange={(e)=>props.handleEditTaskChange(e)}>
                        <option value="done">Done</option>
                        <option value="inprogress">In Progress</option>
                        <option value="notstarted">Not Started</option>
                    </select>   
                </label>
                <br/>
                <label>
                    Start Date:
                    <DatePicker  selected={startDate} name = 'startDate' onChange={(date)=>{props.handleDateChange('startDate', date)}}/>
                </label>
                <br/>
                <label>
                    Due Date:
                    <DatePicker  selected={dueDate} name = 'dueDate' onChange={(date)=>{props.handleDateChange('dueDate', date)}}/>
                </label>
                <br/>
                <label>
                    Expected Time: 
                    <input type='number' value={expectedTime} name='expectedTime' onChange={(e)=>props.handleEditTaskChange(e)}/>
                </label>
                <br/>
                <label>
                    Actual Time: 
                    <input type='number' value={actualTime} name='actualTime' onChange={(e)=>props.handleEditTaskChange(e)}/>
                </label>
                <br/>
                <label>
                    Note: 
                    <input type='text' value={note} name='note' onChange={(e)=>props.handleEditTaskChange(e)}/>
                </label>
                <br/>
            </form>
            <button onClick={props.handleSaveTask}>Save</button>
            <button onClick={props.closeEditTaskForm}>close</button>
        </div>
    )
}