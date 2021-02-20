import { Hub } from 'aws-amplify';
import { ImageView } from './view'
import React from 'react'

export const Image = () => {
  Hub.listen('storage', ({ payload }) => {
    if (payload.event === 'upload'
      && payload.data.attrs.method === 'put'
      && payload.data.attrs.result === 'success') {
      window.location.reload()
    }
  });

  return <ImageView />
}
