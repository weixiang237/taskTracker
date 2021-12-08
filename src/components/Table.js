import { useTable } from 'react-table'
import React, { useEffect, useState } from 'react';

export default function Table(){

const [tasks, setTasks] = useState([
    {
        taskId: 'randomUniqueId',
        day: 'Monday',
        owner: 'Way',
        status: 'Done',
        startDate: '2021, 09, 21',
        // expected time (hours)
        expectedTime: 6,
        // acutal time had worked on
        actualTime: 5,
        note: 'comments'
    },
    {
        taskId: 'randomUniqueId2',
        day: 'Tuesday',
        owner: 'WayIsTrash',
        status: 'Working on it',
        startDate: '2021, 09, 20',
        // expected time (hours)
        expectedTime: 8,
        // acutal time had worked on
        actualTime: 5,
        note: 'comments'
    },
    {
      taskId: 'randomUniqueId3',
      day: 'Tuesday',
      owner: 'WayIsTrash',
      status: 'Working on it',
      startDate: '2021, 09, 20',
      // expected time (hours)
      expectedTime: 8,
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
        Header: 'Day',
        accessor: 'day',
      },
      {
        Header: 'Owner',
        accessor: 'owner',
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
          <button className= "btn-delete" onClick ={()=>{
            const newData = tasks.filter(
                task => task.taskId !== row.values.taskId
            )
            setTasks(newData)
        }}>Delete</button> : null
      }
    ],
    [tasks]
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
             <tr {...row.getRowProps()}>
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
                <td colspan="9"><button style={{display: 'inline-block'}}>+</button></td>
            </tr>
       </tfoot>
     </table>
    )
}