import axios from "axios"
import { getMoviesStart, getMoviesSuccess, getMoviesFailure, deleteMovieStart, deleteMovieFailure, deleteMovieSuccess, createMovieStart, createMovieSuccess, createMovieFailure, updateMovieStart, updateMovieSuccess, updateMovieFailure} from './MovieActions'

//GET MOVIE
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        })
        dispatch(getMoviesSuccess(res.data))
    } catch (error) {
        dispatch(getMoviesFailure())
    }
}
//CREATE MOVIE
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart())
    try {
        const res = await axios.post("/movies", movie,{
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        })
        dispatch(createMovieSuccess(res.data))
    } catch (error) {
        dispatch(createMovieFailure())
    }
}

//UPDATE MOVIE
export const updateMovie = async (id, movie, dispatch) => {
    dispatch(updateMovieStart())
    try {
        const res = await axios.patch("/movies/" + id, movie,{
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        })
        dispatch(updateMovieSuccess(id, res.data))
    } catch (error) {
        dispatch(updateMovieFailure())
    }
}

//DELETE MOVIE
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        })
        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFailure())
    }
}

