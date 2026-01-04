import './Index.scss'
import { Banner } from '@/components/Banner'
import { Thumb } from '@/components/Thumb'
import { fetchLodgings } from '@/services/lodgingsService'
import { useState, useEffect } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

export default function Index() {
	const [lodgings, setLodgings] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [minRange, setMinRange] = useState(3)
	const breakpoint = useBreakpoint()

	useEffect(() => {
		const loadLodgings = async () => {
			try {
				setLoading(true)
				const lodgings = await fetchLodgings()
				setLodgings(lodgings)
			} catch (e) {
				setError(e.message)
			} finally {
				setLoading(false)
			}
		}
		loadLodgings()
	}, [])

	const getItemsToShow = () => {
		switch (breakpoint) {
			case 'mobile':
				return 3
			case 'tablet':
				return 4
			case 'desktop':
			case 'large-desktop':
				return 6
			default:
				return 6
		}
	}

	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	const itemsToShow = getItemsToShow()

	useEffect(() => {
		if (lodgings.length > 0) {
			const maxRange = Math.max(0, lodgings.length - itemsToShow)
			setMinRange(getRandomInt(0, maxRange))
		}
	}, [lodgings, itemsToShow])

	if (loading) {
		return <div>Chargement des logements...</div>
	}
	if (error) {
		return <div>Erreur lors du chargement des logements: {error}</div>
	}

	return (
		<>
			<Banner
				image="/src/assets/BannerSRC1.png"
				title="Chez vous, partout et ailleurs"
				className="index-banner"
			/>
			<div className="lodgings-grid">
				{lodgings.slice(minRange, minRange + itemsToShow).map((lodging) => (
					<Thumb key={`${lodging.id}-${lodging.title}`} lodging={lodging} />
				))}
			</div>
		</>
	)
}
