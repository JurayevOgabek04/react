
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Movies } from "../../components/Movies/Movies"
import { MoviesUl } from "../../components/MoviesUl"
export const Tvshow = () => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular`, {
            params: {
                api_key: "377730aaf04b02ec942be0a20410e5bc",
                page: 1
            }
        })
            .then(res => setData(res.data))
    }, [])
    return (
        <>
            {data?.results && (
                <MoviesUl>
                    {
                        data.results.map(el => <Movies key={el.id} data={el} />)
                    }
                </MoviesUl>)
            }
        </>
    )
}