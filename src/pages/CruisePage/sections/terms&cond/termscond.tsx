import { Container, TermsCondComponent } from '../../../../components'

import styles from './terms-cond.module.scss'

export const TermsAndCond = () => {

	return (
		<Container width="full" className={styles.component}>
			<Container width="containerXl" direction="row" align="start">
				<TermsCondComponent />
			</Container>
		</Container>
	)
}
