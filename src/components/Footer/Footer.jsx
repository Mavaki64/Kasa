import './Footer.scss'
import { LogoKasa } from '@/components/LogoKasa'

/**
 * Component Footer
 * @returns {JSX.Element} Le component Footer
 * @example <Footer />
 */
export default function Footer() {
	return <footer className="footer">
		<LogoKasa color={'#ffffff'} className='logoContainer--footer-logo'/>
		<p>© 2020 Kasa. All rights reserved</p>
	</footer>
}
