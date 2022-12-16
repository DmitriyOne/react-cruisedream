import { Container, FaqComponent } from '../../../../components'

import styles from './faq.module.scss'

export const FAQ = () => {
	
	return (
		<Container width="full" className={styles.component}>
			<div className={styles.container}>
				<FaqComponent />
			</div>
		</Container>
	)
}
