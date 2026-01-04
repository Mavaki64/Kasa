import './Banner.scss'

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
