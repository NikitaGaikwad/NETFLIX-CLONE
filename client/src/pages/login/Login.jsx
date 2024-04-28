import './login.scss'
import logo from '../../asset/netflixlogo.png'
import { useContext, useState } from 'react'
import { login } from '../../authContext/apiCalls'
import { AuthContext } from '../../authContext/AuthContext'
import { Link } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const {dispatch}  = useContext(AuthContext)

    const handleLogin = (e)=>{
        e.preventDefault()
        login({email, password}, dispatch)

    }
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src={logo} alt="" />
                </div>
            </div>
            <div className="container">
                <form >
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone number' onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="loginButtom" onClick={handleLogin}>Sign In</button>
                    <div className='container1'>
                        <input type="checkbox" name="rpassword" id="rpassword" />
                        <label htmlFor="rpassword">Remember me</label>
                        <p>Need Help?</p>
                    </div>
                    <span>New to Netflix? <b><Link to="/register"> Sign up now</Link></b>
                    </span>
                    <small>
                        This page is protected by Google read CAPTCHA to ensure you're not a bot.
                        <b> Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}
