import React from 'react'

function MemoComponentDemo(props) {
    console.log("Memo Component render")
  return (
    
    <div>MemoComponentDemo {props.message}</div>
  )
}

export default React.memo(MemoComponentDemo)