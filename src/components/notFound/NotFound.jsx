import './NotFound.css'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Oops! Page not found</h2>
        <p>Looks like this page doesn’t exist or was moved.</p>

        <Link to="/" className="home-btn">
          🔙 Go Home
        </Link>
      </div>
    </div>
  )
}