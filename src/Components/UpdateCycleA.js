import React, { Component } from 'react'

class UpdateCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "UpdateCycleA"
      }
      console.log("UpdateCycleA constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("UpdateCycleA getDerivedStateFromProps")
    }

    shouldComponentUpdate(nextprops, nextstate, nextcontent){
        console.log("UpdateCycleA shouldComponentUpdate")
        return true
    }

    componentDidUpdate(prevprops, prevstate){
        console.log("UpdateCycleA componentDidUpdate")
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("UpdateCycleA getSnapshotBeforeUpdate")
    }

    changestate = () => {
        this.setState({
            message: "Value changed in UpdateCycleA"
        })
    }
  render() {
    console.log("UpdateCycleA render")
    return (
      <div>
        UpdateCycleA

        <button  onClick={this.changestate} className="btn btn-primary">Update View</button>
      </div>
    )
  }
}

export default UpdateCycleA