import { ErrorMessage, Field, Form, Formik } from 'formik'
import { privateNoteSchema } from '../../business/private-note'

export const PrivateNoteForm = ({ defaultPrivateNote, savePrivateNote }) => {
  const onSubmit = data => {
    savePrivateNote({ ...defaultPrivateNote, ...data })
  }

  return (
    <Formik
      initialValues={defaultPrivateNote}
      validationSchema={privateNoteSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      <Form>
        <label htmlFor='content'>Content</label>
        <Field name='content' />
        <ErrorMessage name='content' />
        <br />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}
