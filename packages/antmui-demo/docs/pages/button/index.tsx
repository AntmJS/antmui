/* eslint-disable @typescript-eslint/no-var-requires */
import Markdown from '../../components/markdown'
import React from 'react'

export default function Docs(): JSX.Element {
  return <Markdown>{require('./README.md')}</Markdown>
}
