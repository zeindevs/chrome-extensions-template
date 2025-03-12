import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
	return (
		<div className="min-w-xs p-2 text-center">
			<h1>Welcome - Chrome Extensions Template</h1>
		</div>
	)
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
