import './Collapse.scss'

export default function Collapse({ title, content, size = 'large' }) {
	return (
		<div className={`collapse collapse--${size}`}>
            <div className={`collapse__header collapse__header--${size}`}> 
                <h3 className={`collapse__title collapse__title--${size}`}>{title}</h3>
                <i className={`fa-solid fa-chevron-up collapse__icon collapse__icon--${size}`}></i>
            </div>
			
			<div className={`collapse__content collapse__content--${size}`}>{content.map((item) => <p key={item}>{item}</p>)}</div>
		</div>
	)
}