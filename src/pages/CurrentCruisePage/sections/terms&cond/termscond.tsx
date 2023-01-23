import { Container } from '../../../../components-ui'
import { TermsCondComponent } from '../../../../components/RepeaterBlocks'

import styles from './terms-cond.module.scss'

export const TermsAndCond = () => {

	return (
		<Container width="full" className={styles.component} tag="section">
			<Container width="containerXl" direction="row" align="start">
				<TermsCondComponent />
			</Container>
		</Container>
	)
}
