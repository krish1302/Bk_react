import React, { Component } from 'react'

class CallbackRefDemo extends Component {
    constructor(props) {
      super(props)
        
      this.cbRef = null
      this.setCbRef = (element) => {
        this.cbRef = element
      }
    }

    showAlert = () =>{
        alert(this.cbRef.value)
    }

  render() {
    return (
      <div>
        <input placeholder='enter your email address' ref={this.setCbRef}/>
        {/* <button className='btn btn-warning' onClick={this.showAlert}>alert</button> */}
      </div>
    )
  }
}

export default CallbackRefDemo