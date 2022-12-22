import { FC, useRef } from 'react'

import { Heading } from '..'
import { useWindowSize } from '../../hooks'

import infoIcon from './images/info.svg'
import arrowIcon from './images/arrow.svg'

import styles from './accordion-table.module.scss'
import classNames from 'classnames'

interface IBody {
	id: number
	date: string
	port: string
	coming: string
	departure: string
	img: string
	desc: string
}

interface IProps {
	handleToggle: (id: number) => void
	body: IBody[]
	activeId: number | null
}

export const AccordionTable: FC<IProps> = ({
	body,
	handleToggle,
	activeId
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const { isTablet } = useWindowSize()
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
			{body.map(item =>
				<div key={item.id} className={styles.body}>
					<div className={styles.row}>
						<div className={styles.visible} onClick={() => handleToggle(item.id)}>
							<div className={styles.col}>
								<span className={styles.number}>
									{item.id}
								</span>
							</div>
							<div className={styles.col}>
								<span className={styles.date}>
									{item.date}
								</span>
							</div>
							<div className={styles.col}>
								<span className={styles.port}>
									{item.port}
								</span>
							</div>
							<div className={styles.col}>
								<span className={classNames(
									styles.info,
									activeId === item.id ? styles.active : ''
								)}>
									<img src={icon} alt="Info icon" />
								</span>
							</div>
							<div className={styles.col}>
								<span className={styles.text}>
									{item.coming}
								</span>
							</div>
							<div className={styles.col}>
								<span className={styles.text}>
									{item.departure}
								</span>
							</div>
						</div>
						<div
							ref={ref}
							className={classNames(
								styles.hidden,
								activeId === item.id ? styles.active : ''
							)}
							style={
								activeId === item.id
									? { height: ref.current!.scrollHeight }
									: { height: '0px' }
							}
						>
							{isTablet &&
								<div className={styles.hiddenRow}>
									<div className={styles.hiddenCol}>
										Прибытие
										<span className={styles.hiddenColText}>
											{item.coming}
										</span>
									</div>
									<div className={styles.hiddenCol}>
										<span className={styles.hiddenColText}>
											{item.departure}
										</span>
										Отправление
									</div>
								</div>
							}
							<div className={styles.hiddenContent}>
								<span className={styles.hiddenImg}>
									<img src={item.img} alt="Foto port" />
								</span>
								<p className={styles.hiddenText}>
									{item.desc}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>

	)
}
