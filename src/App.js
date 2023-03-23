import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import { useState } from 'react';
import UseState from './Components/UseState';
import LifeCycleA from './Components/LifeCycleA';
import UpdateCycleA from './Components/UpdateCycleA';
import FragmentDemo from './Components/FragmentDemo';
import PureComponentDemo from './Components/PureComponentDemo';
import NormalComponentDemo from './Components/NormalComponetDemo';
import ParentDemoforPure from './Components/ParentDemoforPure';
import RefClass from './Components/RefClass';

function App() {

  const [user, setUser] = useState(false)

  let page = (user) ? (
    <Welcome ></Welcome>
  ) : 
  (
    <Login check_user={check_user}></Login> 
  )

  function check_user(login_user){
    setUser(login_user)
  }
  
  


  return (
    <div className="App">
      <RefClass />
    </div>
  );
}

export default App;
