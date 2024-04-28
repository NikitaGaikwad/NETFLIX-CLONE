import './featured.scss'
import { IoMdPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
// import title from '../../asset/title-card.png'
import { useEffect, useState } from 'react';
import axios from 'axios';


const Featured = ({ type, setGenre }) => {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZThiZGYzYjEzYmNmOTQ3YmI5MTQ3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTkyNDAzMywiZXhwIjoxNzEyNTE2MDMzfQ.tGlUi6B6fmLWJhoEFrtWG6K3Yijw9c_REo7OO49YUBo"
                    },
                }
                )
                setContent(res.data[0])

            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent()
    }, [type])
    

    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === 'movie' ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
                        <option>Genre</option>
                        {/* <option value="adventure">Adventure</option> */}
                        <option value="Comedy">Comedy</option>
                        {/* <option value="crime">Crime</option> */}
                        {/* <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option> */}
                        <option value="Horror">Horror</option>
                        <option value="Romantic">Romantic</option>
                        {/* <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option> */}
                        <option value="Drama">Drama</option>
                        <option value="Action">Action</option>
                        {/* <option value="documentary">Documentary</option> */}
                    </select>
                    

                </div>
            )}
            <img src={content.img} alt="" />
            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className='desc'>
                    {content.desc}
                </span>
                
                <div className="buttons">
                    <button className="play">
                        <IoMdPlay />
                        <span>Play</span>
                    </button>

                    <button className="more">
                        <IoIosInformationCircleOutline />
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
