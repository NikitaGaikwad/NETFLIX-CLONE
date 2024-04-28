import './register.scss'
import logo from '../../asset/netflixlogo.png'
import { useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
export default function Register() {
    const navigate = useNavigate
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()

    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }


    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try {
          await axios.post("auth/register", { email,username, password });
          navigate("/login")
        } catch (err) {}
      };


    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src={logo} alt="" />
                    
                    {/* <button className='loginButton'> <Link to="/login">Sign In</Link></button> */}
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership <br />
                    <p style={{fontSize:"15px", textAlign:"center", margin:"5px"}}> Already have any account? <Link to="/login">Log in</Link> here</p>
                    
                </p>
                

                {!email ? (
                    <div className="input">
                        <input type="email" placeholder='email address' ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                        
                    </div>
                ) : (
                    <form className="input">
                        <input type="text" placeholder='username' ref={username} />
                        <input type="password" placeholder='password' ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                       
                        
                    </form>
                )}

            </div>
        </div>
    )
}
