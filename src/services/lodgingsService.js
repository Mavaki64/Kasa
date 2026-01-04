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
