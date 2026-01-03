import './App.scss'
import '../../styles/_reset.scss'
import { StrictMode } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function App() {
	return (
		<>
			<StrictMode>
				<Header />
				<main className="content">
					<Outlet />
				</main>
				<Footer />
			</StrictMode>
		</>
	)
}

export default App
