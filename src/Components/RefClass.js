import React, { Component } from 'react'

class RefClass extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    clickFunc = () => {
        console.log(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input placeholder='enter your name' ref={this.inputRef} />
        <button className='btn btn-secondary' onClick={this.clickFunc}>click me</button>
      </div>
    )
  }
}

export default RefClass