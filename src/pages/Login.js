import React, { useState } from 'react'
import logo from '../imagens/logo.png'
import userLogin from '../services/api.login'
import '../styles/style.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabled(true)
    await userLogin(email, password)
  }

  return(
    <div className="app">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
      </header>

      <form className='form-login' onSubmit={handleSubmit}>
        <input 
          type='email' 
          placeholder='E-mail' 
          className="form-input" 
          disabled={disabled}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input 
          type='password' 
          placeholder='Password' 
          className="form-input" 
          disabled={disabled}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required/>

        <button type='submit' className="form-button">LOGIN</button>
      </form>
    </div>
  )
}

export default Login;


