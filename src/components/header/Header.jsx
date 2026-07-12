import './Header.css'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const StyledLink = styled(NavLink)`
cursor: pointer;
  transition: 0.3s;
  text-decoration: none;
  color: white;

  &:hover {
    color: #facc15;
  }

  &.active {
    color: #facc15;
    font-weight: bold;
  }
`;
export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className='wrapperHeader'>
                    <NavLink to="/" className="logo">🎬 MovieApp</NavLink>
                    <ul className="nav">
                        <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/movies">Movies</StyledLink>
                    </ul>
                </div>
            </div>
        </header>
    )
}