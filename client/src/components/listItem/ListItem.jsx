import './listItem.scss'
import { IoMdPlay } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        })
        setMovie(res.data)
        console.log(res.data);


      } catch (error) {
        console.log(error);
      }
    }
    getMovie()
  }, [item])
  
  return (
    <Link to="/watch" state={{movie: movie}}>
      <div
        className='listItem'
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <IoMdPlay className='icon' />
                <BsPlusLg className='icon' />
                <IoIosThumbsUp className='icon' />
                <IoIosThumbsDown className='icon' />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className='limit'>+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc" style={{ textTransform: "capitalize" }}>
                {movie.desc}
              </div>
              <div className="genre" style={{ textTransform: "capitalize" }}>{movie.genre}</div>
            </div>
          </>
        )}
      </div>

    </Link>


  )
}
