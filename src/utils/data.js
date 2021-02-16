import { DateTime } from 'luxon'

export const formatDateTime = value => {
  return DateTime.fromISO(value).toFormat("dd/MM/yyyy HH:mm'h")
}
