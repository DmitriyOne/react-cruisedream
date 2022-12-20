import classNames from 'classnames'

import { Heading } from '../../../../../components'

import infoIcon from './images/info.svg'
import arrowIcon from './images/arrow.svg'

import styles from './route-list.module.scss'
import { useWindowSize } from '../../../../../hooks'

export const RouteList = () => {
	const { isTablet } = useWindowSize()
	// const rowClassName = classNames(styles.row, styles.header)
	// const titleClassName = classNames(styles.title, styles.col)
	// const textClassName = classNames(styles.)
	const icon = isTablet ? arrowIcon : infoIcon
	return (
		<div className={styles.component}>
			<div className={styles.header}>
				<div className={styles.col} />
				<div className={styles.col}>
					<Heading as="h4" className={styles.title}>Дата</Heading>
				</div>
				<div className={styles.col}>
					<Heading as="h4" className={styles.title}>Порт</Heading>
				</div>
				<div className={styles.col}>
					<Heading as="h4" className={styles.title}>Инфо</Heading>
				</div>
				<div className={styles.col}>
					<Heading as="h4" className={styles.title}>Прибытие</Heading>
				</div>
				<div className={styles.col}>
					<Heading as="h4" className={styles.title}>Отправление </Heading>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.row}>
					<div className={styles.visible}>
						<div className={styles.col}>
							<span className={styles.number}>
								1
							</span>
						</div>
						<div className={styles.col}>
							<span className={styles.date}>
								01.03.23
							</span>
						</div>
						<div className={styles.col}>
							<span className={styles.port}>
								Сохна, Египет
							</span>
						</div>
						<div className={styles.col}>
							<span className={styles.info}>
								<img src={icon} alt="Info icon" />
							</span>
						</div>
						<div className={styles.col}>
							<span className={styles.text}>
								-
							</span>
						</div>
						<div className={styles.col}>
							<span className={styles.text}>
								18:00
							</span>
						</div>
					</div>
					{/* <div className={styles.hidden}>
						dsffsdgfsgsd
					</div> */}
				</div>
			</div>
		</div>
		// <table className={styles.component}>
		// 	<thead className={styles.thead}>
		// 		<tr className={styles.row}>
		// 			<th className={styles.title}></th>
		// 			<th className={styles.title}>Дата</th>
		// 			<th className={styles.title}>Порт</th>
		// 			<th className={styles.title}>Инфо</th>
		// 			<th className={styles.title}>Прибытие</th>
		// 			<th className={styles.title}>Отправление </th>
		// 		</tr>
		// 	</thead>

		// 	<tbody className={styles.tbody}>
		// 		<tr className={styles.row}>
		// 			<td className={styles.item}>1</td>
		// 			<td className={styles.item}>01.03.23 </td>
		// 			<td className={styles.item}>Сохна, Египет</td>
		// 			<td className={styles.item}>i</td>
		// 			<td className={styles.item}>-</td>
		// 			<td className={styles.item}>18:00 </td>
		// 		</tr>
		// 	</tbody>

		// </table>
	)
}
