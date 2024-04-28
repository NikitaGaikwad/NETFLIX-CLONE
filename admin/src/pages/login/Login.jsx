import React, { useContext, useState } from 'react'
import './login.css'
import { AuthContext } from '../../context/authContext/AuthContext'
import { login } from '../../context/authContext/apiCalls'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { isFetching, dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    login({ email, password }, dispatch)


  }
  return (
    <div className='login'>
      <form className='loginForm'>
        <h2>Login</h2>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} className='loginInput' />
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} className='loginInput' />
        <button className='loginButtom' onClick={handleLogin} disabled={isFetching}>Login</button>
      </form>
    </div>
  )
}

export default Login
