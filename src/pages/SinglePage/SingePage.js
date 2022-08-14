import axios from "axios";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./singlepage.css"



export const SinglePage = () => {
    const { id } = useParams()
    const [film, setFilm] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
                api_key: "377730aaf04b02ec942be0a20410e5bc",
                page: 1
            }
        })
            .then(res => setFilm(res.data))
    }, [id])
    return (
        <div className="single">
            <img className="single__img" src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="image Film avatar" />
            <div className="single__inner">
                <h1 className="single__title">{film.title}</h1>
                <p className="single__overview">{film.overview}</p>
                <div className="genres">
                    <p className="genres__title">Genres:</p>
                    {
                        film.genres && film.genres.map(genre => <p className="genre" key={genre.name}> {genre.name}</p>)
                    }
                </div>
                <div className="companies">
                    <p className="companies__title">Companies:</p>
                    {
                        film.production_companies && film.production_companies.map(com => <p className="com" key={com.name}> {com.name}</p>)
                    }
                </div>
            </div>
        </div>
    )


}