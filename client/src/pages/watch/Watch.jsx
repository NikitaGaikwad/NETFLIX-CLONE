import { useLocation } from 'react-router-dom';
import './watch.scss'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';



function Watch() {
    const location = useLocation()
    const movie = location.state.movie
    

    return (
        <div className='watch'>
            <div className="back">
                <IoMdArrowBack />
                <Link to="/" className="link">Home</Link>
            </div>
            <video className='video' 
            autoPlay 
            progress 
            controls
            src={movie.video}></video>
        </div>
    )
}

export default Watch
