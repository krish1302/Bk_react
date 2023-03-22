import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: "LifecycleA"
      }
      console.log("LifecycleA constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA getDerivedStateFromProps")
    }

    componentDidMount(){
        console.log("LifeCycleA didMount")
    }

  render() {
    console.log("LifecycleA render")
    return (
      <div>
        {this.state.message}
        <LifeCycleB />
      </div>
    )
  }

}

export default LifeCycleA