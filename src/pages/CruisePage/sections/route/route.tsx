import { Container, Heading, Tabs } from '../../../../components'
import { ITabs } from '../../../../model/interfaces'

import styles from './route.module.scss'
import { RouteTimeline } from './routeTimeline/routeTimeline'

export const Route = () => {

	const tabs: ITabs[] = [
		{
			id: 1,
			title: 'ТАЙМЛАЙН',
			children: <RouteTimeline />
		},
		{
			id: 2,
			title: 'СПИСОК',
			children: <p> 222222</p>
		},
		{
			id: 3,
			title: 'КАРТА',
			children: <p>bbbfgdbgbgfbgflllllqqq 33333</p>
		}
	]


	return (
		<Container width="full" className={styles.component}>
			<Container direction="column">
				<Heading as="h4" className={styles.title} align="center">
					ВАШ МАРШРУТ
				</Heading>
				<Tabs
					headerClass={styles.tabsHeader}
					items={tabs}
					bodyClass={styles.tabsBody}
					titleClass={styles.tabsTitle}
				/>
			</Container>
		</Container>
	)
}
