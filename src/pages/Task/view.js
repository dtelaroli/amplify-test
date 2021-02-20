import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { formatDateTime } from '../../utils'
import { TaskForm } from './form'

export const ListTasksView = ({ tasks = [], remove }) => {
  return (
    <Fragment>
      <div>
        <Link to='/tasks/add'>Add Task</Link>
      </div>
      <table cellPadding='3'>
        {tasks.length > 0 && (
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th>Action</th>
            </tr>
          </thead>
        )}
        <tbody>
          {tasks.map(task => (
            <tr key={task.createdAt}>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>{formatDateTime(task.createdAt)}</td>
              <td>{formatDateTime(task.updatedAt)}</td>
              <td>
                <Link to={`/tasks/${task.id}`}>Edit</Link>
                <a href='#/' onClick={() => remove(task)}>
                  Remove
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export const FormTaskView = ({
  saveTask,
  defaultTask = {},
  error = { errors: [] }
}) => {
  const data = {
    id: defaultTask.id,
    status: defaultTask.status,
    title: defaultTask.title,
    description: defaultTask.description
  }

  return (
    <Fragment>
      <div>
        <Link to='/'>List Tasks</Link>
      </div>
      <div>
        <strong>{error.errors.map(e => e.message).join(', ')}</strong>
        <TaskForm defaultTask={data} saveTask={saveTask} />
      </div>
    </Fragment>
  )
}
