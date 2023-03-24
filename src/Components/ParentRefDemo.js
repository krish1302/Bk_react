import React, { Component } from 'react'
import CallbackRefDemo from './CallbackRefDemo'

class ParentRefDemo extends Component {
    constructor(props) {
      super(props)

      this.callbackRefDemoRef = React.createRef()
    }

    alertChild = () => {
        this.callbackRefDemoRef.current.showAlert()
    }

  render() {
    return (
      <div>
        <i className="fas fa-home"></i>
        <i className='fa fa-chrome'></i>
        <CallbackRefDemo ref={this.callbackRefDemoRef}/>
        <button className='btn btn-warning' onClick={this.alertChild}>alert</button>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                My first Dropdown
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">option1</a></li>
                <li><a class="dropdown-item" href="#">option1</a></li>
                <li><a class="dropdown-item" href="#">option1</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default ParentRefDemo