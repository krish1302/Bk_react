import React, { Component } from 'react'
import './Login.css'

class Login extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        email: '',
        password: '',
        check_user: this.props.check_user
      }
    }

    setEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    setPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    isUserLoggedIn = (event) => {
        event.preventDefault()
        this.state.check_user(this.state.email !="" && this.state.password !="")
    }

  render() {
    return (
      <div>
        <form className="loginForm card" onSubmit={this.isUserLoggedIn}> 
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={this.state.email} onChange={this.setEmailChange}/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="enter your password" value={this.state.password} onChange={this.setPasswordChange} />
            </div>
            <button type="submit" className="btn btn-success">Login</button>
        </form>
      </div>
    )
  }
}

export default Login