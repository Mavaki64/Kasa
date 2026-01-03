import { NavLink } from 'react-router-dom'
import './Nav.scss'

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
