import Link from 'next/link'

import { Heading } from '@crdr/ui'

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
				href="/ship/1"
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
