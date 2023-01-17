import { Outlet } from 'react-router-dom'

import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollTop } from './ScrollTop'

export const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
			<ScrollTop />
		</>
	)
}
