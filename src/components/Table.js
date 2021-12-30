import { useTable } from 'react-table'
import React, { useEffect, useState } from 'react';
import EditTask from './editTaskScreen/EditTask';
import '../css/table.css'
import '../css/editTask.css'

export default function Table(){
console.log('Table re-rendered')
const [editStates, setEditStates] = useState({
  editTaskOn: false,
  taskId: null,
  taskTitle: null,
  taskDescription: null,
  day: null,
  assignedTo: null,
  status: null,
  expectedTime: null,
  actualTime: null,
  note: null,
})

const [startDate, setStartDate] = useState(new Date());
const [dueDate, setDueDate] = useState(new Date()); 

const handleAddTask= () =>{
  //let newEditStates = Object.assign({}, editStates)
  //console.log(newEditStates)
}

const handleSaveTask= () =>{
  let newTasks = JSON.parse(JSON.stringify(tasks))
  let taskIndex = newTasks.findIndex((obj=>obj.taskId === editStates.taskId))
  let keys = Object.keys(newTasks[taskIndex])
  keys.map(key=>{
    newTasks[taskIndex][key] = editStates[key]
  })
  newTasks[taskIndex].startDate = new Date(startDate)
  newTasks[taskIndex].dueDate = new Date(dueDate)
  setTasks(newTasks)
}

const handleEditTaskChange = (e) =>{
  let newEditStates = Object.assign({}, editStates)
  newEditStates[e.target.name] = e.target.value
  setEditStates(newEditStates)
}

const handleDateChange = (dateKey, date) =>{
  let newDate = new Date(date)
  if (dateKey === 'startDate'){
    setStartDate(newDate)
  }
  if (dateKey === 'dueDate'){
    setDueDate(newDate)
  }
}

function closeEditTaskForm (){
  let newEditStates = {
  editTaskOn: false,
  taskId: null,
  taskTitle: null,
  taskDescription: null,
  day: null,
  assignedTo: null,
  status: null,
  startDate: new Date(),
  dueDate: new Date(),
  expectedTime: null,
  actualTime: null,
  note: null,
 }
 console.log('success')
 setEditStates(newEditStates)
}


const handleEditTask= (rowValues) =>{
  //console.log(rowValues)
  let newEditStates = Object.assign({}, editStates)
  
  let keys = Object.keys(newEditStates)
  keys.map(key=>{
    newEditStates[key] = rowValues[key]
  })
  newEditStates.editTaskOn = true
  let newStartDate = new Date(rowValues.startDate)
  let newDueDate = new Date(rowValues.dueDate)
  setEditStates(newEditStates)
  setStartDate(newStartDate)
  setDueDate(newDueDate)
}

const [tasks, setTasks] = useState([
    {
        taskId: 'randomUniqueId',
        taskTitle:'Leetcode',
        taskDescription:'praticing algorithm',
        day: 'Monday',
        assignedTo: 'Way',
        status: 'done',
        startDate: '2021,09,21',
        dueDate: '2021,12,21',
        // expected time (hours)
        expectedTime: 6,
        // acutal time had worked on
        actualTime: 5,
        note: 'comments'
    },
    {
      taskId: 'randomUniqueId2',
      taskTitle:'taskTracker',
      taskDescription:'doing side project',
      day: 'Tuesday',
      assignedTo: 'Way',
      status: 'inprogress',
      startDate: '2021,09,23',
      dueDate: '2021, 12, 25',
      // expected time (hours)
      expectedTime: 6,
      // acutal time had worked on
      actualTime: 5,
      note: 'comments'
    },
    {
      taskId: 'randomUniqueId3',
      taskTitle:'Break',
      taskDescription:'take a break',
      day: 'Wednesday',
      assignedTo: 'Way',
      status: 'notstarted',
      startDate: '2021,12,25',
      dueDate: '2022-01-01',
      // expected time (hours)
      expectedTime: 6,
      // acutal time had worked on
      actualTime: 5,
      note: 'comments'
  },
])

    // hard code some dummy table data and see how to construct the table
const data = React.useMemo(
    () => {
        return tasks
    },
    [tasks]
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Task ID',
        accessor: 'taskId', // accessor is the "key" in the data
      },
      {
        Header: 'Task Title',
        accessor: 'taskTitle',
      },
      {
        Header: 'Description',
        accessor: 'taskDescription',
      },
      {
        Header: 'Day',
        accessor: 'day',
      },
      {
        Header: 'Assigned To',
        accessor: 'assignedTo',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'Due Date',
        accessor: 'dueDate',
      },
      {
        Header: 'Expected Time',
        accessor: 'expectedTime',
      },
      {
        Header: 'Actual Time',
        accessor: 'actualTime',
      },
      {
        Header: 'Note',
        accessor: 'note',
      },
      {
          Header: 'Action',
          accessor: 'action',
          Cell: ({row}) => 
          row.values.taskId !== null ?
          <button className= "btn-delete" onClick ={editStates.editTaskOn? null : (e)=>{
            e.stopPropagation()
            const newData = tasks.filter(
                task => task.taskId !== row.values.taskId
            )
            setTasks(newData)
        }}>Delete</button> : null
      }
    ],
    [tasks, editStates.editTaskOn]
  )

 /*  const tableHooks = (hooks) =>{
      hooks.visibleColumns.push((columns) =>[
          ...columns,
          {
              id: 'Action',
              Header: 'Action',
              Cell: ({row}) => (
                  <button onClick={()=>{
                      const newTasks = data.filter(task=>task.taskId !== row.cells[0].value)
                      setTasks(newTasks)
                      console.log(data)
                      }}
                      >Delete</button>
              )
          }
      ])
  } */

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

    return(
      <div className='tableScreen'>
        <div>
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}
                onClick = {editStates.editTaskOn? null : ()=>{handleEditTask(row.values)}}
              >
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
              <tr>
                  <td colSpan="12"><button onClick = {handleAddTask} style={{display: 'inline-block'}}>+</button></td>
              </tr>
        </tfoot>
      </table>
      <div>
        {editStates.editTaskOn && 
        <EditTask 
        editTaskProps = {editStates}
        startDate = {startDate}
        dueDate = {dueDate}
        closeEditTaskForm={closeEditTaskForm}
        handleEditTaskChange={handleEditTaskChange}
        handleSaveTask={handleSaveTask}
        handleDateChange={handleDateChange}
        />}
      </div>
      </div>
     </div> 
    )
}