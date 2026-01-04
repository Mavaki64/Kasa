import './Slideshow.scss'
import { useState, useEffect } from 'react'

export default function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentPicture, setCurrentPicture] = useState(pictures[currentIndex])

    useEffect(() => {
        setCurrentPicture(pictures[currentIndex])
    }, [currentIndex, pictures])

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const handleNext = () => {
        const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="slideshow">
            <div className="slideshow__container">
                <img src={currentPicture} alt="Slideshow" className={`slideshow__image`} />
			</div>
			<i className="fa-solid fa-chevron-left slideshow__control slideshow__control--prev" onClick={handlePrev}></i>
			<i className="fa-solid fa-chevron-right slideshow__control slideshow__control--next" onClick={handleNext}></i>
		</div>
	)
}