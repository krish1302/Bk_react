import React, { PureComponent } from 'react'

export class PureComponentDemo extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         message: this.props.message
      }
    }
  render() {
    console.log("Pure component render")
    return (
      <div>PureComponentDemo {this.state.message}</div>
    )
  }
}

export default PureComponentDemo