import * as Yup from 'yup'

const STRING = Yup.string()
const STRING_REQUIRED = STRING.required()

export const privateNoteSchema = Yup.object({
  content: STRING_REQUIRED
})
