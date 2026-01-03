import { Nav } from '@/components/Nav'
import './Header.scss'
import { LogoKasa } from '@/components/LogoKasa'

export default function Header() {
	return (
		<header className="header">
			<LogoKasa />
			<Nav />
		</header>
	)
}
