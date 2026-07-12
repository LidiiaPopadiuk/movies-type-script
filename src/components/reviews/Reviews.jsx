import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './Reviews.css'
import axios from "axios"

export const Reviews = () => {
    const { id } = useParams()
    const [reviews, setReviews] = useState([])

    const myAPI = '91c7f76b1f3882ead0c92576730eccde'
    const reviewsAPI = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${myAPI}`

    useEffect(() => {
        const reviewsInfo = async () => {
            try {
                const responseRev = await axios.get(reviewsAPI)
                setReviews(responseRev.data.results)
            } catch (err) {
                console.log(err);
            }
        }
        reviewsInfo()
    }, [id])

    if (reviews.length === 0) {
        return <p className="noReviews">No reviews yet 😢</p>
    }

    return (
        <ul className="revList">
            {reviews.map(rev => {
                return (
                    <li key={rev.id} className="revItem">
                        <h2>Author: {rev.author}</h2>
                        <h3>{rev.content}</h3>
                    </li>
                )
            })}
        </ul>
    )
}