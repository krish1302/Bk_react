import React, { Component } from 'react'

class FragmentDemo extends Component {
  render() {
    return (
    //   <React.Fragment>
    //     <h1>Fragment Demo</h1>
    //     <button>Click me</button>
    //   </React.Fragment>
    <>
        <h1>Fragment Demo</h1>
        <button>Click me</button>
    </>
    )
  }
}

export default FragmentDemo