import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './codeBlock'
import './index.less'

type props = {
  children: string
}

export default function MarkdownBox(props: props): JSX.Element {
  return (
    <div className="docs-markdown-com">
      <ReactMarkdown
        children={props.children}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <CodeBlock
                value={String(children).replace(/\n$/, '')}
                language={match[1]}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      />
    </div>
  )
}
