import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { NavLink, Outlet } from "react-router-dom"
import noImage from '../../img/noImage.png'
import './FilmInfo.css'
export const FilmInfo = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState([])
    const navigate = useNavigate()
    console.log(navigate)

    const myAPI = '91c7f76b1f3882ead0c92576730eccde'

    useEffect(() => {
        const infoAboutFilm = async () => {
            try {
                const detailAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${myAPI}`
                const detailInfo = await axios.get(detailAPI)
                setDetail(detailInfo.data)
            } catch (err) {
                console.log(err);
            }
        }
        infoAboutFilm()
    }, [id])

    if (!detail) return <p>Loading...</p>

    return (
        <section className="film-detail">
            <div className="container">
                <div className="mainDiv">
                    <img src={detail.poster_path
                        ? `https://image.tmdb.org/t/p/w300${detail.poster_path}`
                        : noImage} alt={detail.original_title} />
                    <div className="wrapperContext">
                        <div className="wrapper">
                            <h2 className="filmTitle">{detail.original_title}</h2>
                            <div>
                                <h3>Overview</h3>
                                <h4>{detail.overview}</h4>
                            </div>
                            <div>
                                <h3>Genres</h3>
                                <h4>{detail.genres && detail.genres.map(genre => genre.name).join(', ')}</h4>
                            </div>
                        </div>
                        <div className="btnWrapper">
                            <NavLink className="btn3" onClick={() => navigate(-1)}>
                                ← Back
                            </NavLink>
                            <NavLink onClick={() => {
                                setTimeout(() => {
                                    window.scrollTo({
                                        top: 750,
                                        behavior: "smooth"
                                    })
                                }, 300)
                            }} to="casts" className="btn">Casts</NavLink>
                            <NavLink onClick={() => {
                                setTimeout(() => {
                                    window.scrollTo({
                                        top: 750,
                                        behavior: "smooth"
                                    })
                                }, 300)
                            }} to="reviews" className="btn">Reviews</NavLink>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </section>
    )
}