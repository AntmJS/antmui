module.exports = function template(props) {
  const { imports, jsx, js } = props
  return `
  import React from 'react'
  ${imports}

  export default function demo() {
    ${js}
    return (
      <>
      ${jsx}
      </>
    )
  }
  `
}