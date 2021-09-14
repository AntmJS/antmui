import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'

type Iprops = {
  language: string
  value: string
}
export default function CodeBlock(props: Iprops) {
  const { language, value } = props

  SyntaxHighlighter.registerLanguage('jsx', jsx)

  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
}
