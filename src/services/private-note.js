import { API, graphqlOperation } from 'aws-amplify'
import { createPrivateNote, updatePrivateNote, deletePrivateNote } from '../graphql/mutations'
import { getPrivateNote, listPrivateNotes } from '../graphql/queries'

export const fetchPrivateNotes = async () => {
  const privateNoteData = await API.graphql(graphqlOperation(listPrivateNotes), {})
  return privateNoteData.data.listPrivateNotes.items
}

export const fetchPrivateNote = async params => {
  const privateNoteData = await API.graphql(graphqlOperation(getPrivateNote, params))
  return privateNoteData.data.getPrivateNote
}

export const addPrivateNote = async input => {
  const result = await API.graphql(graphqlOperation(createPrivateNote, { input }))
  return result.data.createPrivateNote
}

export const editPrivateNote = async input => {
  const result = await API.graphql(graphqlOperation(updatePrivateNote, { input }))
  return result.data.updatePrivateNote
}

export const removePrivateNote = async ({ id }) => {
  const result = await API.graphql(
    graphqlOperation(deletePrivateNote, { input: { id } })
  )
  return result.data.removePrivateNote
}
