import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'

const URL = "https://fsa-jwt-practice.herokuapp.com/signup/"

function App() {

  return (
    <>
      <SignUpForm URL={URL}/>
      <Authenticate/>
    </>
  )
}

export default App
