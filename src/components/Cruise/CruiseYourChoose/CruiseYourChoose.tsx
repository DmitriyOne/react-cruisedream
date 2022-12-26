import { Heading } from '../../../components'
import { useWindowSize } from '../../../hooks'
import { CruiseAmountDays } from '../../Cruise'

import styles from './cruise-your-choose.module.scss'

export const CruiseYourChoose = () => {
	const { isMobile } = useWindowSize()

	return (
		<>
			<div className={styles.header}>
				<CruiseAmountDays className={styles.headerAmountDays} />
				{isMobile
					?
					<Heading as="h4" className={styles.headerTitle}>
						Великолепный Круиз по Красному морю и Саудовской Аравии из Сохны на MSC Splendida
					</Heading>
					:
					<div>
						<Heading as="h4" className={styles.headerTitle}>
							Великолепный Круиз по Красному морю и Саудовской Аравии из Сохны на MSC Splendida
						</Heading>
						<div className={styles.headerSubtitle}>
							Отправление 01 марта 2023г из Сохны на MSC Splendida. Номер круиза 4764326
						</div>
					</div>
				}
			</div>
			{isMobile && <div className={styles.headerSubtitle}>
				Отправление 01 марта 2023г из Сохны на MSC Splendida. Номер круиза 4764326
			</div>}
		</>
	)
}
