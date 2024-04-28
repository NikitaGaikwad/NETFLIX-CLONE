import './navbar.scss'
import logo from '../../asset/netflixlogo.png'
import { IoIosSearch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import profileImg from '../../asset/profileImg.jpg'
import { IoMdArrowDropdown } from "react-icons/io";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authContext/AuthContext';
import {logout} from '../../authContext/AuthActions'


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const {dispatch} = useContext(AuthContext)

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container3">
                <div className="left">
                    <img src={logo} alt="" />
                    <Link to="/" className='link'>
                        <span>Home</span>
                    </Link>
                    <Link to="/series" className='link'>
                        <span>TV Shows</span>
                    </Link>
                    <Link to="/movies" className='link'>
                        <span>Movies</span>
                    </Link>
                    <Link className='link'>
                        <span>News & Popular</span>
                    </Link>
                    <Link className='link'>
                        <span>My List</span>
                    </Link>
                    <Link className='link'>
                        <span>Browse by Languages</span>
                    </Link>
                </div>
                <div className="right">
                    <IoIosSearch className='icons' style={{ height: "50px", width: "30px" }} />
                    <span>Kids</span>
                    <IoNotifications className='icons' style={{ height: "50px", width: "20px" }} />
                    <img src={profileImg} alt="" />

                    <div className="profile">
                        <IoMdArrowDropdown className='icons' style={{ height: "20px", width: "20px" }} />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={()=>dispatch(logout())}> <Link to="/register" className='link'>Logout</Link> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar


