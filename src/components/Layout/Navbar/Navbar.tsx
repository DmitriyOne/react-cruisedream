import { NavLink } from 'react-router-dom'

import { MenuLinks } from '../../../constants'

export const Navbar = () => {
	return (
		<nav>
			<ul style={{ display: 'flex' }}>
				{MenuLinks.map((item, idx) =>
					<li
						key={idx}
						style={{ marginRight: '15px' }}
					>
						<NavLink
							to={item.href}
						>
							{item.text}
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	)
}
