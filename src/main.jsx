import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { App } from '@/layout/App'
import { Index } from '@/pages/public/Index'
import { About } from '@/pages/public/About'
import { Error } from '@/pages/public/Error'
import LodgingSheet from '@/pages/public/LodgingSheet/LodgingSheet'

const root = document.getElementById('root')

createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Index />} />
				<Route path="About" element={<About />} />
				<Route path="Lodging/:id" element={<LodgingSheet />} />
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	</BrowserRouter>
)
