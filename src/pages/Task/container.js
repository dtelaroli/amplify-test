import { useAsync } from 'react-async'
import { useHistory, useParams } from 'react-router-dom'
import {
  addTask,
  editTask,
  fetchTask,
  fetchTasks,
  removeTask
} from '../../services'
import { FormTaskView, ListTasksView } from './view'

const defaultTask = {
  title: '',
  description: '',
  status: 'PENDING'
}

export const ListTasks = () => {
  const { data } = useAsync({ promiseFn: fetchTasks })

  const onResolve = () => {
    window.location.reload()
  }

  const { run } = useAsync({
    deferFn: ([task]) => removeTask(task),
    onResolve
  })

  return <ListTasksView tasks={data} remove={run} />
}

export const AddTask = () => {
  const history = useHistory()
  const onResolve = data => {
    history.push(`/tasks/${data.id}`)
  }

  const { run, error } = useAsync({
    deferFn: ([task]) => addTask(task),
    onResolve
  })

  return <FormTaskView saveTask={run} defaultTask={defaultTask} error={error} />
}

export const EditTask = () => {
  const { id } = useParams()
  const history = useHistory()
  const { data } = useAsync({ promiseFn: fetchTask, id })

  const onResolve = () => {
    history.push('/')
  }

  const { run, error } = useAsync({
    deferFn: ([task]) => editTask(task),
    onResolve
  })

  return <FormTaskView saveTask={run} defaultTask={data} error={error} />
}
