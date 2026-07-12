import axios from 'axios'
import './MainPage.css'
import { useState, useEffect } from 'react'
import noImage from '../../img/noImage.png'
import { NavLink } from 'react-router-dom'
import  Film  from '../../types/Films'
export const MainPage: React.FC = () => {

    const [todayFilms, setTodayFilms] = useState<Film[]>([])

    const myAPI = '91c7f76b1f3882ead0c92576730eccde'
    const mainAPI = `https://api.themoviedb.org/3/trending/movie/day?api_key=${myAPI}`

    useEffect(() => {

        const filmsToday = async () => {
            try {
                const info = await axios.get(mainAPI)
                setTodayFilms(info.data.results)
            } catch (err) {
                console.log(err);
            }
        }

        filmsToday()
    }, [])

    return (
        <main className='main'>
            <div className="container">
                <h1 className="title" >Trending Today</h1>
                <ul className='filmsList'>
                    {todayFilms.map(film => {
                        return <li className='filmsItem' key={film.id}>
                            <NavLink to={`/movies/${film.id}`}>
                                <img src={film.poster_path
                                    ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                                    : noImage}
                                    alt={film.title} />
                                <div className="movie-info">
                                    <h2>{film.title}</h2>
                                    <p>⭐ {film.vote_average}</p>
                                </div>
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
        </main>
    )

}