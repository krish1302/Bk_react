import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import { useState } from 'react';

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
     {page}
    </div>
  );
}

export default App;
