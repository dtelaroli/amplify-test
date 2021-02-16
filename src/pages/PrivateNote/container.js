import { useAsync } from 'react-async'
import { useHistory, useParams } from 'react-router-dom'
import {
  addPrivateNote,
  editPrivateNote,
  fetchPrivateNote,
  fetchPrivateNotes,
  removePrivateNote
} from '../../services'
import { FormPrivateNoteView, ListPrivateNotesView } from './view'

const defaultPrivateNote = {
  content: ''
}

export const ListPrivateNotes = () => {
  const { data } = useAsync({ promiseFn: fetchPrivateNotes })

  const onResolve = () => {
    window.location.reload()
  }

  const { run } = useAsync({
    deferFn: ([privateNote]) => removePrivateNote(privateNote),
    onResolve
  })

  return <ListPrivateNotesView privateNotes={data} remove={run} />
}

export const AddPrivateNote = () => {
  const history = useHistory()
  const onResolve = data => {
    history.push(`/private-notes/${data.id}`)
  }

  const { run, error } = useAsync({
    deferFn: ([privateNote]) => addPrivateNote(privateNote),
    onResolve
  })

  return (
    <FormPrivateNoteView
      savePrivateNote={run}
      defaultPrivateNote={defaultPrivateNote}
      error={error}
    />
  )
}

export const EditPrivateNote = () => {
  const { id } = useParams()
  const history = useHistory()
  const { data } = useAsync({ promiseFn: fetchPrivateNote, id })

  const onResolve = () => {
    history.push('/private-notes')
  }

  const { run, error } = useAsync({
    deferFn: ([privateNote]) => editPrivateNote(privateNote),
    onResolve
  })

  return (
    <FormPrivateNoteView
      savePrivateNote={run}
      defaultPrivateNote={data}
      error={error}
    />
  )
}
