export const fetchLodgings = async () => {
	try {
		const response = await fetch('/logements.json')
		if (!response.ok) {
			throw new Error('Erreur lors de la récupération des logements')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.error('Erreur fetch lodgings:', error)
		throw error
	}
}

export const fetchLodgingById = async (id) => {
	try {
		const lodgings = await fetchLodgings()
		const lodging = lodgings.find((lodging) => lodging.id === id)
		if (!lodging) {
			throw new Error('Logement non trouvé')
		}
		return lodging
	} catch (e) {
		console.error('Erreur fetch lodging by id:', e)
		throw e
	}
}
