import './list.scss'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ListItem from '../listItem/ListItem';
import { useRef, useState } from 'react';



export default function List({list}) {
   
    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false)
    const listRef  = useRef()
    
    const handleClick =(direction)=>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction ==='left' && slideNumber > 0 ){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction ==='right' && slideNumber <5 ){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <div className='list'>
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <IoIosArrowBack className='sliderArrow left' style={{display:!isMoved && 'none'}} onClick={()=>handleClick("left")}/>
                <div className="container4" ref={listRef}>
                    {list.content.map((item, i)=>(
                        <ListItem  index={i} item={item}/>
                    ))}
                </div>
                <IoIosArrowForward className='sliderArrow right' onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}
