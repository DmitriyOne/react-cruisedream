
import { useRouter } from 'next/router'

import { dataAdvantages } from '@crdr/fakedata'
import { useWindowSize } from '@crdr/hooks'

import { Container, MyImage } from '@crdr/ui'

import styles from './advantages.module.scss'

export const Advantages = () => {
	const { isMobile } = useWindowSize()
	const router = useRouter()

	if (isMobile && router.pathname !== '/') {
		return null
	}

	return (
		<Container width="full" className={styles.component} tag="section">
			<Container className={styles.container} align="start">
				{dataAdvantages.map((item, idx) =>
					<div className={styles.wrapper} key={idx}>
						<span className={styles.imgWrapper}>
							<MyImage
								src={item.icon.src}
								alt={item.icon.alt}
							/>
						</span>
						<h5 className={styles.title}>
							{item.title}
						</h5>
						<p className={styles.description}>
							{item.subtitle}
						</p>
					</div>
				)}
			</Container>
		</Container>
	)
}
