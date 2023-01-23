import { Link } from 'react-router-dom'

import { Heading } from '../../components-ui'
import { CRUISE_ROUTES } from '../../constants'

export const AllShipsPage = () => {
	return (
		<div
			style={{
				width: '100%',
				maxWidth: '1180px',
				marginTop: '100px',
				marginBottom: '100px',
				marginLeft: 'auto',
				marginRight: 'auto',
			}}
		>
			<Heading align="center">
				Страница кораблей
			</Heading>

			<Link
				to={CRUISE_ROUTES.CURRENT_SHIP}
				style={{
					display: 'block',
					marginTop: '40px',
				}}
			>
				Выбранный корабль
			</Link>
		</div>
	)
}
