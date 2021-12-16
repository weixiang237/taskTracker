import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const placeHolder = 'sjdklajslkdjasdljalsdjl'

export default function EditTask(props){
    const {editTaskOn,
        taskId,
        taskTitle,
        day,
        assignedTo,
        status,
        startDate,
        dueDate,
        expectedTime,
        actualTime,
        note,} = props.editTaskProps;
    const [StartDate, setStartDate] = useState(new Date(startDate));
    const [DueDate, setDueDate] = useState(new Date(dueDate));
    //console.log(startDate)
    return(
        props.editTaskProps.editTaskOn ?
        <div className='EditTaskScreen'>
            <form className='EditTaskForm'>
                {placeHolder !== null ?
                <label>
                    Task ID: {placeHolder}
                </label>:null
                }
                <br/>
                <label>Task Title:
                    <input type='text' name='taskTitle'/> 
                </label>
                <br/>
                <label>Description:
                    <input type='text' name='taskDescription'/> 
                </label>
                <br/>
                <label>
                    Day: 
                    <select name='days'>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                    </select>                      
                </label>
                <br/>
                <label>
                    Assinged to: 
                    <input type='text' name='assignedTo'/>
                </label>
                <br/>
                <label>
                    Status: 
                    <select name='status'>
                        <option value="done">Done</option>
                        <option value="inprogess">In Progress</option>
                        <option value="notstarted">Not Started</option>
                    </select>   
                </label>
                <br/>
                <label>
                    Start Date:
                    <DatePicker selected={StartDate} onChange={(date)=>setStartDate(date)}/>
                </label>
                <br/>
                <label>
                    Due Date:
                    <DatePicker selected={DueDate} onChange={(date)=>setDueDate(date)}/>
                </label>
                <br/>
                <label>
                    Expected Time: 
                    <input type='number' name='expectedTime'/>
                </label>
                <br/>
                <label>
                    Actual Time: 
                    <input type='number' name='actualTime'/>
                </label>
                <br/>
                <label>
                    Note: 
                    <input type='text' name='note'/>
                </label>
                <br/>
                <input type = 'submit' name='submit'/>
            </form>
        </div> : <div></div>
    )
}