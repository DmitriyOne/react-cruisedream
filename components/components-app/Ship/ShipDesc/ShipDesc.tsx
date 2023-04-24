/* eslint-disable max-len */
import { useState } from 'react'

import { Button } from '@crdr/ui'

import styles from './ship-desc.module.scss'

const desc = 'Круиз на борту лайнера MSC Splendida – это комфортное и стильное путешествие на современном корабле. Splendida переводится с итальянского как великолепная, и попав на борт, вы сразу же поймёте, почему лайнер получил свой имя. Изысканный, элегантный дизайн, который грамотно сочетает в себе итальянскую классику с яркими акцентами круиз на борту лайнера MSC Splendida – это комфортное и стильное путешествие на современном корабле. Splendida переводится с итальянского как великолепная, и попав на борт, вы сразу же поймёте, почему лайнер получил свой имя. Изысканный, элегантный дизайн, который грамотно сочетает в себе итальянскую классику с яркими акцентами'

export const ShipDesc = () => {
	const [isReadMore, setIsReadMore] = useState(true)
	const text = desc

	const onToggle = () => {
		setIsReadMore(!isReadMore)
	}

	return (
		<div className={styles.component}>
			<p className={styles.text}>
				{isReadMore ? (text.slice(0, 350) + '...') : text}
			</p>
			<Button
				className={styles.button}
				onClick={onToggle}
			>
				{isReadMore ? 'Читать далее' : ' Скрыть'}
			</Button>
		</div>
	)
}
