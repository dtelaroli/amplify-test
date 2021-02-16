import * as Yup from 'yup'

const STRING = Yup.string()
const STRING_REQUIRED = STRING.required()

export const TaskStatus = {
  PENDING: 'PENDING',
  DOING: 'DOING',
  COMPLETE: 'COMPLETE'
}

export const taskSchema = Yup.object({
  title: STRING_REQUIRED,
  description: STRING,
  status: Yup.mixed().oneOf(Object.values(TaskStatus))
})
