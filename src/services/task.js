import { API, graphqlOperation } from 'aws-amplify'
import { createTask, updateTask, deleteTask } from '../graphql/mutations'
import { getTask, listTasks, searchTasks } from '../graphql/queries'
import { onCreateTask, onDeleteTask, onUpdateTask } from '../graphql/subscriptions'

export const fetchTasks = async () => {
  const taskData = await API.graphql(graphqlOperation(listTasks), {})
  return taskData.data.listTasks.items
}

export const searchTask = async (text) => {
  const wildcard = `*${text}*`
  const filter = {
    or: [
      { title: { wildcard } },
      { description: { wildcard } }
    ]
  }
  const taskData = await API.graphql(graphqlOperation(searchTasks, { limit: 10, filter }))
  return taskData.data.searchTasks.items
}

export const fetchTask = async params => {
  const taskData = await API.graphql(graphqlOperation(getTask, params))
  return taskData.data.getTask
}

export const addTask = async input => {
  const result = await API.graphql(graphqlOperation(createTask, { input }))
  return result.data.createTask
}

export const editTask = async input => {
  const result = await API.graphql(graphqlOperation(updateTask, { input }))
  return result.data.updateTask
}

export const removeTask = async ({ id }) => {
  const result = await API.graphql(
    graphqlOperation(deleteTask, { input: { id } })
  )
  return result.data.removeTask
}

export const listenTasks = (callback) => {
  API.graphql(graphqlOperation(onCreateTask)).subscribe({
    next: ({ value }) => callback({ operation: 'create', ...value.data.onCreateTask })
  })

  API.graphql(graphqlOperation(onUpdateTask)).subscribe({
    next: ({ value }) => callback({ operation: 'update', ...value.data.onUpdateTask })
  })

  API.graphql(graphqlOperation(onDeleteTask)).subscribe({
    next: ({ value }) => callback({ operation: 'delete', ...value.data.onDeleteTask })
  })
}
