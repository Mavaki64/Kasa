import { useState, useEffect } from 'react'

const breakpoints = {
    mobile: 375,
    tablet: 768,
    desktop: 1024,
    'large-desktop': 1440,
}

/**
 * Hook pour récupérer le breakpoint actuel
 * @returns {string} Le breakpoint actuel
 * @example useBreakpoint() // 'mobile' si la largeur de la fenêtre est inférieure à 375px, 'tablet' si la largeur de la fenêtre est supérieure ou égale à 768px, 'desktop' si la largeur de la fenêtre est supérieure ou égale à 1024px, 'large-desktop' si la largeur de la fenêtre est supérieure ou égale à 1440px
 */
export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(() => {
        if (typeof window === 'undefined') return 'mobile'

        const width = window.innerWidth
        if (width >= breakpoints['large-desktop']) return 'large-desktop'
        if (width >= breakpoints.desktop) return 'desktop'
        if (width >= breakpoints.tablet) return 'tablet'
        return 'mobile'
    })

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth

            if (width >= breakpoints['large-desktop']){ 
                setBreakpoint('large-desktop')
            } else if (width >= breakpoints.desktop) {
                setBreakpoint('desktop')
            } else if (width >= breakpoints.tablet) {
                setBreakpoint('tablet')
            } else {
                setBreakpoint('mobile')
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return breakpoint
}

/**
 * Hook pour vérifier si le breakpoint actuel est inférieur à un breakpoint donné
 * @param {string} breakpointName - Le nom du breakpoint à vérifier
 * @returns {boolean} true si le breakpoint actuel est inférieur au breakpoint donné, false sinon
 * @example useIsBelowBreakpoint('tablet') // true si le breakpoint actuel est inférieur à tablet
 */
export const useIsBelowBreakpoint = (breakpointName) => {
	const currentBreakpoint = useBreakpoint()
	const breakpointOrder = ['mobile', 'tablet', 'desktop', 'large-desktop']
	const currentIndex = breakpointOrder.indexOf(currentBreakpoint)
	const targetIndex = breakpointOrder.indexOf(breakpointName)
	
	return currentIndex < targetIndex
}