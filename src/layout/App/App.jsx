import './App.scss'
import { StrictMode } from 'react'
import { Outlet } from 'react-router'

function App() {
	return (
		<>
			<StrictMode>
				<Outlet />
			</StrictMode>
		</>
	)
}

export default App
