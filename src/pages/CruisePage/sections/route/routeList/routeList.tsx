import classNames from 'classnames'

import { AcccordionTabel, Heading } from '../../../../../components'

import infoIcon from './images/info.svg'
import arrowIcon from './images/arrow.svg'
import img1Src from './images/1.jpg'

import styles from './route-list.module.scss'
import { useWindowSize } from '../../../../../hooks'
import { useState } from 'react'

export const RouteList = () => {
	const [activeId, setActive] = useState<number | null>(null)

	const handleToggle = (idx: number) => {
		console.log(idx)


		if (activeId === idx) {
			setActive(null)
		} else {
			setActive(idx)
		}
	}
	return (
		<AcccordionTabel
			handleToggle={handleToggle}
			activeId={activeId}
			id={2}
		/>
		// <div className={styles.component}>
		// 	<div className={styles.header}>
		// 		<div className={styles.col} />
		// 		<div className={styles.col}>
		// 			<Heading as="h4" className={styles.title}>Дата</Heading>
		// 		</div>
		// 		<div className={styles.col}>
		// 			<Heading as="h4" className={styles.title}>Порт</Heading>
		// 		</div>
		// 		<div className={styles.col}>
		// 			<Heading as="h4" className={styles.title}>Инфо</Heading>
		// 		</div>
		// 		<div className={styles.col}>
		// 			<Heading as="h4" className={styles.title}>Прибытие</Heading>
		// 		</div>
		// 		<div className={styles.col}>
		// 			<Heading as="h4" className={styles.title}>Отправление </Heading>
		// 		</div>
		// 	</div>
		// 	<div className={styles.body}>
		// 		<div className={styles.row}>
		// 			<div className={styles.visible}>
		// 				<div className={styles.col}>
		// 					<span className={styles.number}>
		// 						1
		// 					</span>
		// 				</div>
		// 				<div className={styles.col}>
		// 					<span className={styles.date}>
		// 						01.03.23
		// 					</span>
		// 				</div>
		// 				<div className={styles.col}>
		// 					<span className={styles.port}>
		// 						Сохна, Египет
		// 					</span>
		// 				</div>
		// 				<div className={styles.col}>
		// 					<span className={styles.info}>
		// 						<img src={icon} alt="Info icon" />
		// 					</span>
		// 				</div>
		// 				<div className={styles.col}>
		// 					<span className={styles.text}>
		// 						-
		// 					</span>
		// 				</div>
		// 				<div className={styles.col}>
		// 					<span className={styles.text}>
		// 						18:00
		// 					</span>
		// 				</div>
		// 			</div>
		// 			<div className={styles.hidden}>
		// 				<span className={styles.hiddenImg}>
		// 					<img src={img1Src} alt="Foto port" />
		// 				</span>
		// 				<p className={styles.hiddenText}>
		// 					Айн-Сохна — пока что почти неизвестный русскому туристу курорт на берегу Суэцкого залива Красного
		// 					моря. Туда не летают чартеры, пакетные туры в этот регион — большая редкость, в основном он интересен
		// 					самостоятельным путешественникам. Главное его преимущество — расположение: всего в 150 км от Каира,
		// 					поэтому трансфер по прямому шоссе из египетской столицы не будет столь утомительным, как в Хургаду или Шарм-эль-Шейх.
		// 				</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}
