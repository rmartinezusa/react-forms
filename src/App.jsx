import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'

const URL_SIGNUP = "https://fsa-jwt-practice.herokuapp.com/signup/"
const URL_AUTHENTICATE = "https://fsa-jwt-practice.herokuapp.com/authenticate/"

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm URL_SIGNUP={URL_SIGNUP} token={token} setToken={setToken}/>
      <Authenticate URL_AUTHENTICATE={URL_AUTHENTICATE} token={token} setToken={setToken} />
    </>
  )
}

export default App