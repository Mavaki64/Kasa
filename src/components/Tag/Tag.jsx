import './Tag.scss'

/**
 * Component Tag
 * @param {Object} props - Les props du component
 * @param {string} props.tag - Le tag à afficher (obligatoire)
 * @returns {JSX.Element} Le component Tag
 * @example <Tag tag="République" />
 */
export default function Tag({ tag }) {
	return (
		<div className="tag">
			<p className="tag__text">{tag}</p>
		</div>
	)
}