import { FC } from 'react'
import classNames from 'classnames'

import { B, Button } from '../../../../../components'
import { ICabinsDesc } from '../../../../../model/interfaces'

import styles from './desc-right.module.scss'

interface IProps {
	cabinsDesc: ICabinsDesc[]
}

export const DescRight: FC<IProps> = ({ cabinsDesc }) => {

	return (
		<>
			<div className={classNames(styles.header, styles.row)}>
				<div className={styles.item}>
					<span className={styles.text}>
						ПАЛУБА
					</span>
				</div>
				<div className={styles.item}>
					<span className={styles.text}>
						ЦЕНА
					</span>
				</div>
				<div className={styles.item}>
					<span className={styles.text}>
						НАЛИЧИЕ
					</span>
				</div>
			</div>
			<div className={styles.body}>
				{cabinsDesc.map(cabin =>
					<div key={cabin.id} className={styles.row}>
						<div className={styles.item}>
							<span className={classNames(
								styles.code,
								cabin.deck.code === 'A1' ? styles.pink : '',
								cabin.deck.code === 'A2' ? styles.red : '',
								cabin.deck.code === 'BU' ? styles.viol : '',
								cabin.deck.code === 'BY' ? styles.blue : '',
							)}>
								{cabin.deck.code}
							</span>
							<B fontWeight={500} className={styles.deck}>
								{cabin.deck.name}
							</B>
						</div>
						<div className={styles.item}>
							<B fontWeight={700} className={styles.price}>
								{cabin.price} $
							</B>
						</div>
						<div className={styles.item}>
							<Button
								className={classNames(
									styles.choose,
									cabin.checked ? styles.checked : ''
								)}
							>
								{cabin.checked ? 'Выбрано' : 'Выбрать'}
							</Button>
						</div>
					</div>
				)}
			</div>
			{/* <div className={styles.hidden}>
				<p className={styles.hiddenText}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veniam perspiciatis reiciendis veritatis dicta iusto facere sed repudiandae quidem, nulla, optio ea nemo, pariatur necessitatibus neque temporibus aliquam eius similique maiores quod. Debitis harum maxime repellat veniam expedita libero molestiae nobis, reprehenderit facere aut quam eveniet voluptas est vero sit ullam, ad quis corrupti! Rem praesentium ea facere obcaecati reiciendis modi corporis dolore minus nisi aspernatur voluptatum nemo molestias, quis placeat dolorum ut. Autem odit expedita alias a minima nulla nemo aliquam, sunt ea, itaque perspiciatis atque rem repellat temporibus. Repellat consectetur quisquam voluptate deserunt illo hic error, aliquam optio.
				</p>
			</div> */}
		</>
	)
}
