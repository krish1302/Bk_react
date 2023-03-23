import React, { Component } from 'react'

class NormalComponetDemo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           message: this.props.message
        }
      }

  render() {
    console.log("Normal component render")
    return (
      <div>NormalComponetDemo {this.state.message}</div>
    )
  }
}

export default NormalComponetDemo