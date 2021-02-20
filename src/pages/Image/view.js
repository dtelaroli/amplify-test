import { AmplifyS3Image, AmplifyS3ImagePicker } from '@aws-amplify/ui-react'
import React, { Fragment } from 'react'

export const ImageView = () => {
  return (
    <Fragment>
      <AmplifyS3Image imgKey="profile.png" level="private" />
      <AmplifyS3ImagePicker fileToKey="profile.png" level="private" track={true} />
    </Fragment>
  )
}
