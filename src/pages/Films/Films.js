import { NavLink } from "react-router-dom"
import "./films.css"

export const Films = () => {
    return (
        <nav className="films">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active__link' : 'films__link')}>Home</NavLink>
            <NavLink to="/popular" className={({ isActive }) => (isActive ? 'active__link' : 'films__link')}>Popular</NavLink>
            <NavLink to="/toprated" className={({ isActive }) => (isActive ? 'active__link' : 'films__link')}>Toprated</NavLink>
            <NavLink to="/upcoming" className={({ isActive }) => (isActive ? 'active__link' : 'films__link')}>Upcoming</NavLink>
            <NavLink to="/tvshow" className={({ isActive }) => (isActive ? 'active__link' : 'films__link')}>Tvshow</NavLink>
            <input type="search" placeholder="Search..." className="films__search" />
        </nav>
    )
}