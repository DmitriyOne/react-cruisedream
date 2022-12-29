import { Container } from '../../../../components'
import { CruiseNavbar } from '../../../../components/Cruise'

import styles from './header.module.scss'

export const Header = () => {
	return (
		<Container width="full" className={styles.component}>
			<CruiseNavbar />
		</Container>
	)
}
