import classNames from 'classnames'
import { FC } from 'react'

import { Button } from '../../../components-ui/Button'

import styles from './show-by.module.scss'

interface IProps {
	className?: string
}

export const ShowBy: FC<IProps> = ({ className }) => {

	return (
		<div className={classNames(styles.component, className)}>
			<Button className={classNames(styles.text, styles.active)}>
				10
			</Button>
			<Button className={styles.text}>
				20
			</Button>
			<Button className={styles.text}>
				50
			</Button>
			<Button className={styles.text}>
				все
			</Button>
		</div>
	)
}
