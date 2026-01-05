import { useState, useEffect } from 'react'
import './Rating.scss'

/**
 * Component Rating
 * @param {Object} props - Les props du component
 * @param {number} props.rating - La note sur 5 à afficher (obligatoire)
 * @returns {JSX.Element} Le component Rating
 * @example <Rating rating={4} /> // Affiche 4 étoiles colorées et 1 étoile grise
 */
export default function Rating({ rating }) {
    const numberOfStars = parseInt(rating)
    const [stars, setStars] = useState([])
    
    useEffect(() => {
        const starsArray = []
        for (let i = 0; i < 5; i++) {
            if (i < numberOfStars) {
                starsArray.push(<i key={i} className="fa-solid fa-star colored_star"></i>)
            } else {
                starsArray.push(<i key={i} className="fa-solid fa-star empty_star"></i>)
            }
        }
        setStars(starsArray)
    }, [numberOfStars])
    
	return (
		<div className="rating">
            {stars}
		</div>
	)
}