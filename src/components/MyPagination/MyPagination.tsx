import classNames from 'classnames'

import { Button } from '../Button'

import arrowIcon from './icon/arrow.svg'

import styles from './my-pagination.module.scss'

export const MyPagination = () => {
	
	return (
		<div className={styles.component}>
			<div className={styles.squareWrapper}>
				<Button className={classNames(styles.square, styles.prev)}>
					<img className={styles.icon} src={arrowIcon} alt="Prev icon" />
				</Button>
				<Button className={classNames(styles.square, styles.active)}>
					1
				</Button>
				<Button className={styles.square}>
					2
				</Button>
				<Button className={classNames(styles.square, styles.next)}>
					<img className={styles.icon} src={arrowIcon} alt="Next icon" />
				</Button>
			</div>
			<div className={styles.amountWrapper}>
				1 из 5
			</div>
		</div>
	)
}
