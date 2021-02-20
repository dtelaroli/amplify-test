import { AmplifyS3Image, AmplifyS3ImagePicker } from '@aws-amplify/ui-react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { privateNoteSchema } from '../../business'
import React from 'react'

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
        <br /><br />
        <AmplifyS3Image imgKey="profile.png" level="private" s/>
        <AmplifyS3ImagePicker fileToKey="profile.png" level="private" />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}
