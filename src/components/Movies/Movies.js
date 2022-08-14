import "./movies.css"
import { Link } from "react-router-dom"
export const Movies = ({ data }) => {

    return (
        <Link to={`/singepage/${data.id}`} className="movies">
            <div className="movies__img__div">
                <img className="movies__img" src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} alt="Image film" />
            </div>
            <div className="movies__inner">
                <h2 className="movies__title">{data.title}</h2>
                <p className="movies__data">{data.release_date}</p>
            </div>
        </Link>
    )
}