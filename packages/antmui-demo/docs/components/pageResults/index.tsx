import React from 'react'
import './index.less'
const preCls = 'antmui-site-pageLayout'

interface IProps {
  status?: 403 | 404 | 500
  title?: string
  subTitle?: string
}

function Index(props: IProps): JSX.Element {
  return (
    <div className={`${preCls}-error-result`}>
      <div>{props.status}</div>
      <div>{props.title}</div>
    </div>
  )
}

export default Index
