import './Tag.scss'

export default function Tag({ tag }) {
	return (
		<div className="tag">
			<p className="tag__text">{tag}</p>
		</div>
	)
}