import { NavLink } from 'react-router-dom'
import './Nav.scss'

/**
 * Component Nav
 * @returns {JSX.Element} Le component Nav
 * @example <Nav />
 */
export default function Nav() {
	return (
		<nav className="nav">
			<NavLink to={'/'} className={'navLink'}>
				Accueil
			</NavLink>
			<NavLink to={'/About'} className={'navLink'}>
				À propos
			</NavLink>
		</nav>
	)
}
