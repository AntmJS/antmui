import React from 'react'
import Button from './pages/button/index'

export default [
  {
    path: 'button',
    component: function index(props: any): JSX.Element {
      return <Button {...props} />
    },
  },
]
