import { Container } from '../../../components'

import { dataAdvantages } from '../../../fakedata'

import styles from './advantages.module.scss'

export const Advantages = () => {
	return (
		<Container width="full" className={styles.component} tag="section">
			<Container className={styles.container} align="start">
				{dataAdvantages.map((item, idx) =>
					<div className={styles.wrapper} key={idx}>
						<span className={styles.imgWrapper}>
							<img
								className={styles.img}
								src={item.icon}
								alt={item.alt}
							/>
						</span>
						<h5 className={styles.title}>
							{item.title}
						</h5>
						<p className={styles.description}>
							{item.desc}
						</p>
					</div>
				)}
			</Container>
		</Container>
	)
}