import { Container } from '../../../../components-ui'
import { CruiseNavbar } from '../../../../components/Cruise'

import styles from './header.module.scss'

export const Header = () => {
	return (
		<Container width="full" className={styles.component}>
			<CruiseNavbar />
		</Container>
	)
}
