import { FC, ReactNode } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollTop } from './ScrollTop'

interface IProps {
	children: ReactNode
}

export const Layout: FC<IProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
			<ScrollTop />
		</>
	)
}
