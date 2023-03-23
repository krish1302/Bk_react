import React, { Component, PureComponent } from 'react'
import MemoComponentDemo from './MemoComponentDemo'
import NormalComponetDemo from './NormalComponetDemo'
import PureComponentDemo from './PureComponentDemo'

class ParentDemoforPure extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Parent"
    }
  }

  componentDidMount(){
    setInterval(()=> {
      console.log("message")
      this.setState({
        message: "Hi Child"
      }, ()=> {console.log("why")})
    }, 3000)
  }

  render() {
    return (
      <>
        {/* <PureComponentDemo message={this.state.message}/> */}
        {/* <NormalComponetDemo message={this.state.message}/> */}
        <MemoComponentDemo message={this.state.message}/>
      </>
    )
  }
}

export default ParentDemoforPure