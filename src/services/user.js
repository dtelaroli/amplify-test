import { Auth } from 'aws-amplify'

export const currentUser = async () => {
  return Auth.currentUserInfo()
}
