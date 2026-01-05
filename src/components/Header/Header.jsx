import { Nav } from '@/components/Nav'
import './Header.scss'
import { LogoKasa } from '@/components/LogoKasa'

/**
 * Component Header
 * @returns {JSX.Element} Le component Header
 * @example <Header />
 */
export default function Header() {
	return (
		<header className="header">
			<LogoKasa />
			<Nav />
		</header>
	)
}
