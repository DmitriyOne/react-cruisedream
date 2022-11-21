import { FC } from 'react'
import bgImage1 from '../../../../../assets/images/intro/intro.jpeg'

import styles from './background.module.scss'

interface IProps {
	src?: string
	alt?: string
}

export const Background: FC<IProps> = ({
	src,
	alt
}) => {
	return (
		<div className={styles.component}>
			<img
				className={styles.image}
				src={bgImage1}
				alt="Family look at the sea"
			/>
		</div>
	)
}
