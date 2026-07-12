import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import noImage from '../../img/noImage.png'
import './Casts.css'
import axios from "axios"

export const Casts = () => {
    const { id } = useParams()
    const [casts, setCasts] = useState([])

    const myAPI = '91c7f76b1f3882ead0c92576730eccde'
    const castsAPI = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${myAPI}`

    useEffect(() => {
        const getCasts = async () => {
            try {
                const castsResponse = await axios.get(castsAPI)
                setCasts(castsResponse.data.cast)
            } catch (err) {
                console.log(err);
            }
        }
        getCasts()
    }, [id])

    return (
        <ul className="caracterLIst">
            {casts.map(cast => {
                return (
                    <li className="caracterItem" key={cast.id}>
                        <img src={cast.profile_path
                            ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                            : noImage} alt={cast.original_name} />
                        <h3>Original name</h3>
                        <h4>{cast.original_name}</h4>
                        <h3>Character</h3>
                        <h4>{cast.character}</h4>
                    </li>
                )
            })}
        </ul>
    )
}