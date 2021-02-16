import { ErrorMessage, Field, Form, Formik } from 'formik'
import { taskSchema, TaskStatus } from '../../business/task'

export const TaskForm = ({ defaultTask, saveTask }) => {
  const onSubmit = data => {
    saveTask({ ...defaultTask, ...data })
  }

  return (
    <Formik
      initialValues={defaultTask}
      validationSchema={taskSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      <Form>
        <label htmlFor='title'>Title</label>
        <Field name='title' />
        <ErrorMessage name='title' />
        <br />

        <label htmlFor='description'>Description</label>
        <Field name='description' type='textarea' />
        <ErrorMessage name='description' />
        <br />

        <label htmlFor='status'>Status</label>
        <Field
          name='status'
          component='select'
          options={Object.values(TaskStatus)}
        >
          {Object.values(TaskStatus).map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </Field>
        <ErrorMessage name='status' />
        <br />

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}
