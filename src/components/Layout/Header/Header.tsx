import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar'

export const Header = () => {
	return (
		<header style={{ display: 'flex', justifyContent: 'space-between' }}>
			<Logo />
			<Navbar />
		</header>
	)
}
