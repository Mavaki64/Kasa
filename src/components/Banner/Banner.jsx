import './Banner.scss'

/**
 * Component Banner
 * @param {Object} props - Les props du component
 * @param {string} props.image - L'image du banner (obligatoire)
 * @param {string} props.title - Le titre du banner (optionnel)
 * @returns {JSX.Element} Le component Banner
 * @example <Banner image="/src/assets/BannerSRC1.png" title="Chez vous, partout et ailleurs" />
 */
export default function Banner({ image, title = null }) {
	return (
		<>
			<div className={`banner ${title ? 'banner--with-title' : ''}`}>
				<img src={image} alt={title} className={`banner__image ${title ? 'banner__image--scale-up' : ''}`} />
				{title && <h1 className="banner__title">{title}</h1>}
			</div>
		</>
	)
}
