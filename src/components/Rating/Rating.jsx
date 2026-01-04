import { useState, useEffect } from 'react'
import './Rating.scss'

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