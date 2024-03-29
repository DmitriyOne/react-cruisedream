import { useWindowSize } from '@crdr/hooks'

import { CruiseAmountDays } from '@crdr/components'
import { Heading } from '@crdr/ui'

import { CardLeft } from './cardLeft/cardLeft'
import { CardRight } from './cardRight/cardRight'

import styles from './cruise-your-choose.module.scss'

export const CruiseYourChoose = () => {
	const { isMobile } = useWindowSize()

	return (
		<>
			<div className={styles.header}>
				<CruiseAmountDays classComponent={styles.headerAmountDays} />
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

			<div className={styles.body}>
				<div className={styles.cardLeft}>
					<CardLeft />
				</div>
				<div className={styles.cardRight}>
					<CardRight />
				</div>
			</div>
		</>
	)
}
