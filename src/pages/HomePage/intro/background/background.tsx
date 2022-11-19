import bgImage1 from '../../../../assets/images/intro/intro.jpeg'

import styles from './background.module.scss'

export const Background = () => {
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
