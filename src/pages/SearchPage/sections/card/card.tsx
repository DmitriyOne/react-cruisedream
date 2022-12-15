import { useContext } from 'react'
import { CruiseContext } from '../../../../context'

import { CardBody } from './card-body/card-body'
import { CardPrice } from './card-price/card-price'
import { CardSlider } from './card-slider/card-slider'

import styles from './card.module.scss'

export const Card = () => {
	const {allCruises} = useContext(CruiseContext)

	return (
		<>
			{allCruises.map(cruise =>
				<div key={cruise.id} className={styles.component}>
					<CardSlider
						days={cruise.days}
						label={cruise.label}
						images={cruise.sliderImages}
						isTimer={cruise.isTimer}
						deadline={cruise.deadline}
						isSale={cruise.isSale}
						sale={cruise.sale}
					/>
					<div className={styles.wrapper}>
						<CardBody
							id={cruise.id}
							logo={cruise.logo}
							days={cruise.days}
							cruiseName={cruise.cruiseName}
							datepicker={cruise.datepicker}
							otherDates={cruise.otherDates}
							shipName={cruise.shipName}
							routes={cruise.cruiseRoute}
							icons={cruise.icons}
						/>
						<CardPrice
							logo={cruise.logo}
							priceFrom={cruise.priceFrom}
							isSale={cruise.isSale}
							sale={cruise.sale}
						/>
					</div>
				</div>
			)}
		</>
	)
}
