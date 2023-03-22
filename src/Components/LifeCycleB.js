import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: "LifeCycleB"
      }
      console.log("LifeCycleB constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB getDerivedStateFromProps")
    }

    componentDidMount(){
        console.log("LifeCycleB didMount")
    }

  render() {
    console.log("LifeCycleB render")
    return (
      <div>{this.state.message}</div>
    )
  }

}

export default LifeCycleB