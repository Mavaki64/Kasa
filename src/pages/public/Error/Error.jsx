import './Error.scss'
import { Link } from 'react-router-dom'

export default function Error() {
	return (
		<div className="error-container">
			<h1 className="error404">404</h1>
			<h2 className="error-text">Oups! La page que<span>vous demandez n'existe pas.</span></h2>
			<Link to="/" className="error-return-link">
				Retourner sur la page d'accueil
			</Link>
		</div>
	)
}
