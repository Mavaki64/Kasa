/**
 * Service pour récupérer tous les logements
 * @returns {Promise<Array<Object>>} Les logements trouvés
 * @throws {Error} Si une erreur survient lors de la récupération des logements
 * @example fetchLodgings() // Promise<Array<Object>> Les logements trouvés
 */
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

/**
 * Service pour récupérer un logement par son id
 * @param {string} id - L'id du logement à récupérer
 * @returns {Promise<Object>} Le logement trouvé
 * @throws {Error} Si une erreur survient lors de la récupération du logement
 * @throws {Error} Si le logement n'est pas trouvé
 * @example fetchLodgingById('123ABC') // Promise<Object> Le logement trouvé avec l'id 123ABC
 */
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
