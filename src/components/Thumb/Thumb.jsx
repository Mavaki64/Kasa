import './Thumb.scss'
import { Link } from 'react-router-dom'

/**
 * Component Thumb
 * @param {Object} props - Les props du component
 * @param {Object} props.lodging - Le lodging à afficher (obligatoire)
 * @returns {JSX.Element} Le component Thumb
 * @example <Thumb lodging={lodging} />
 * @example <Thumb lodging={{ id: '123', title: 'Logement 1', cover: '/path/to/cover.jpg' }} />
 */
export default function Thumb({ lodging }) {
    const { id, title, cover } = lodging
	return (
		<Link to={`/lodging/${id}`} className="thumb">
			<img src={cover} alt={title} className="thumb__image"/>
			<h2 className="thumb__title">{title}</h2>
		</Link>
	)
}