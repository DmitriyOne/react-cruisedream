import { Button } from '../../../Button'

import arrowIcon from '../icons/arrow-top.svg'

import styles from './scroll-top.module.scss'

export const ScrollTop = () => {
	return (
		<Button className={styles.arrow}>
			<img
				src={arrowIcon}
				alt="Arrow top"
			/>
		</Button>
	)
}
