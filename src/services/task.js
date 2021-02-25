import { API, graphqlOperation } from 'aws-amplify'
import { createTask, updateTask, deleteTask } from '../graphql/mutations'
import { getTask, listTasks, searchTasks } from '../graphql/queries'

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
