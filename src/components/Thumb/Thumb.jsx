import './Thumb.scss'
import { Link } from 'react-router-dom'

export default function Thumb({ lodging }) {
    const { id, title, cover } = lodging
	return (
		<Link to={`/lodging/${id}`} className="thumb">
			<img src={cover} alt={title} className="thumb__image"/>
			<h2 className="thumb__title">{title}</h2>
		</Link>
	)
}