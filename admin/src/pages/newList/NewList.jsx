import "./newlist.css";
import React, { useContext, useEffect, useState } from 'react';
// import storage from "../../firebase";
import storage from '../../firebase'


import { ListContext } from '../../context/listContext/ListContext'
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCalls";
import { createList } from "../../context/listContext/apiCalls";
import { useNavigate } from "react-router-dom";



export default function NewList() {
  const [list, setList] = useState(null)
  const navigate = useNavigate()


  const { dispatch } = useContext(ListContext)
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext)

  useEffect(()=>{
    getMovies(dispatchMovie)
  },[dispatchMovie])


  const handleChange = (e) => {
    const value = e.target.value
    setList({ ...list, [e.target.name]: value })
  }

  const handleSelect = (e)=>{
    let value = Array.from(e.target.selectedOptions, (option)=> option.value)
    setList({...list, [e.target.name]:value})
    // e.preventDefault()
  }

  

  

  const handleSubmit = (e) => {
    e.preventDefault()
    createList(list, dispatch)
    navigate("/lists")
   
  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="popular movies" id="title" name="title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="Genre" name="genre" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type"  onChange={handleChange}>
          <option>Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Content</label>
          <select multiple name="content"  onChange={handleSelect}>
            {movies.map((movie)=>(

            <option key={movie._id} value={movie._id}>{movie.title}</option>
            ))}
          </select>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
