import { useState } from 'react'
import './Collapse.scss'

export default function Collapse({ title, content, size = 'large' }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={`collapse collapse--${size}`}>
			<button
				className={`collapse__header collapse__header--${size}`}
				onClick={() => setIsOpen(!isOpen)}
				type="button">
				<h3 className={`collapse__title collapse__title--${size}`}>{title}</h3>
				<i
					className={`fa-solid fa-chevron-up collapse__icon collapse__icon--${size} ${
						isOpen ? 'collapse__icon--open' : ''
					}`}></i>
			</button>

			<div className={`collapse__content collapse__content--${size} ${isOpen ? 'collapse__content--open' : ''}`}>
				<p className="collapse__content-text">{content}</p>
			</div>
		</div>
	)
}
