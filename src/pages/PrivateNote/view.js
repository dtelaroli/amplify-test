import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { PrivateNoteForm } from './form'
import { formatDateTime } from '../../utils'

export const ListPrivateNotesView = ({ privateNotes = [], remove }) => {
  return (
    <Fragment>
      <div>
        <Link to='/private-notes/add'>Add Private Note</Link>
      </div>
      <table cellPadding='3'>
        {privateNotes.length > 0 && (
          <thead>
            <tr>
              <th>Content</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th>Action</th>
            </tr>
          </thead>
        )}
        <tbody>
          {privateNotes.map(privateNote => (
            <tr key={privateNote.createdAt}>
              <td>{privateNote.content}</td>
              <td>{formatDateTime(privateNote.createdAt)}</td>
              <td>{formatDateTime(privateNote.updatedAt)}</td>
              <td>
                <Link to={`/private-notes/${privateNote.id}`}>Edit</Link>
                <a href='#/' onClick={() => remove(privateNote)}>
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

export const FormPrivateNoteView = ({
  savePrivateNote,
  defaultPrivateNote = {},
  error = { errors: [] }
}) => {
  const data = {
    id: defaultPrivateNote.id,
    content: defaultPrivateNote.content
  }

  return (
    <Fragment>
      <div>
        <Link to='/private-notes'>List Private Notes</Link>
      </div>
      <div>
        <strong>{error.errors.map(e => e.message).join(', ')}</strong>
        <PrivateNoteForm
          defaultPrivateNote={data}
          savePrivateNote={savePrivateNote}
        />
      </div>
    </Fragment>
  )
}
