import './LodgingSheet.scss'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchLodgingById } from '@/services/lodgingsService'
import { useState, useEffect } from 'react'
import { Slideshow } from '@/components/Slideshow'
import { Rating } from '@/components/Rating'
import { Tag } from '@/components/Tag'
import { Collapse } from '@/components/Collapse'

export default function LodgingSheet() {
	const { id } = useParams()
	const navigate = useNavigate()
	const [lodging, setLodging] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadLodging = async () => {
			try {
				setLoading(true)
				const data = await fetchLodgingById(id)
				setLodging(data)
			} catch (error) {
				console.error('Erreur lors du chargement du logement:', error)
				navigate('/error', { replace: true })
			} finally {
				setLoading(false)
			}
		}
		loadLodging()
	}, [id, navigate])

	if (loading) {
		return <div>Chargement...</div>
	}
	if (!lodging) {
		return null
	}

	return (
		<div className="lodging-sheet-container">
			<Slideshow pictures={lodging.pictures} />
			<div className="lodging-sheet-content">
				<div className="lodging-sheet-content-left">
					<div className="lodging-sheet-content-header">
						<h1 className="lodging-sheet-content-title">{lodging.title}</h1>
						<p className="lodging-sheet-content-location">{lodging.location}</p>
					</div>
					<div className="lodging-sheet-content-tags">
						{lodging.tags.map((tag) => (
							<Tag key={tag} tag={tag} />
						))}
					</div>
				</div>
				<div className="lodging-sheet-content-right">
					<div className="lodging-sheet-content-host">
						<img
							className="lodging-sheet-content-host-picture"
							src={lodging.host.picture}
							alt={lodging.host.name}
						/>
						<p className="lodging-sheet-content-host-name">{lodging.host.name}</p>
					</div>
					<Rating rating={lodging.rating} />
				</div>
			</div>

			<div className="lodging-sheet-content-collapse">
				<Collapse title="Description" content={lodging.description} size="medium" />
				<Collapse
					title="Équipements"
					size="medium"
					content={lodging.equipments.map((equipment, index) => (
						<span key={equipment}>
							{equipment}
							{index < lodging.equipments.length - 1 && <br />}
						</span>
					))}
				/>
			</div>
		</div>
	)
}
