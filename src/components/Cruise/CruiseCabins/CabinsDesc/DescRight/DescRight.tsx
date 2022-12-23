import classNames from 'classnames'
import { B } from '../../../../B'

import styles from './desc-right.module.scss'

export const DescRight = () => {

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
				<div className={styles.row}>
					<div className={styles.item}>
						<span className={styles.code}>
							A2
						</span>
						<B fontWeight={500} className={styles.deck}>
							Палуба - 21
						</B>
					</div>
					<div className={styles.item}>
						<B fontWeight={700} className={styles.price}>
							1 725 $
						</B>
					</div>
					<div className={styles.item}>
						<B fontWeight={500} className={styles.choose}>
							Выбрать
						</B>
					</div>
				</div>
				<div className={styles.row}>
					<div className={styles.item}>
						<span className={styles.code}>
							A2
						</span>
						<B fontWeight={500} className={styles.deck}>
							Палуба - 21
						</B>
					</div>
					<div className={styles.item}>
						<B fontWeight={700} className={styles.price}>
							1 725 $
						</B>
					</div>
					<div className={styles.item}>
						<B fontWeight={500} className={styles.choose}>
							Выбрать
						</B>
					</div>
				</div>
			</div>
			{/* <div className={styles.hidden}>
				<p className={styles.hiddenText}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veniam perspiciatis reiciendis veritatis dicta iusto facere sed repudiandae quidem, nulla, optio ea nemo, pariatur necessitatibus neque temporibus aliquam eius similique maiores quod. Debitis harum maxime repellat veniam expedita libero molestiae nobis, reprehenderit facere aut quam eveniet voluptas est vero sit ullam, ad quis corrupti! Rem praesentium ea facere obcaecati reiciendis modi corporis dolore minus nisi aspernatur voluptatum nemo molestias, quis placeat dolorum ut. Autem odit expedita alias a minima nulla nemo aliquam, sunt ea, itaque perspiciatis atque rem repellat temporibus. Repellat consectetur quisquam voluptate deserunt illo hic error, aliquam optio.
				</p>
			</div> */}
		</>
	)
}
