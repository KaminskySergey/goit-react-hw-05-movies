import { NavLink } from "react-router-dom"
import { NavList } from "./Navigation.styled"

const getActiveLink = ({isActive}) => {
    return isActive ? 'active' : '';
    
}

const Navigation = () => {
return (
    <NavList>
        <li className="nav-link">
        <NavLink className={getActiveLink} to=''>
        Home
        </NavLink>
        </li>
        <li className="nav-link">
        <NavLink className={getActiveLink} to='movies' >
        Movies
        </NavLink>
        </li>
    </NavList>
)
}

export default Navigation