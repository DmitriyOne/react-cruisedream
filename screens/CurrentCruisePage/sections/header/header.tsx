import { CruiseNavbar } from '@crdr/components'
import { Container } from '@crdr/ui'

import styles from './header.module.scss'

export const Header = () => {
	return (
		<Container width="full" className={styles.component}>
			<CruiseNavbar />
		</Container>
	)
}
