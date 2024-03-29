/* eslint-disable max-len */
import classNames from 'classnames'

import { DestinationsMap } from '@crdr/components'
import { B, Container, Heading } from '@crdr/ui'

import styles from './intro.module.scss'

export const Intro = () => {
	return (
		<Container
			width="full"
			className={classNames(styles.component, 'pt-section')}
			direction="column"
			tag="section"
		>
			<Heading align="center" as="h1" className="title">
				ВСЕ РЕГИОНЫ
			</Heading>
			<Container width="container" className={styles.contentWrapper} direction="column" align="center">
				<p className={styles.text}>
					From the pure white sand beaches of the Caribbean to the fascinating architecture of the <B fontWeight={700}> Mediterranean,</B> the natural beauty of <B fontWeight={700}> Norway</B> to the diverse culture of the <B fontWeight={700}> Canary Islands,</B> you can choose from a fantastic range of cruise holiday destinations handpicked by the UK’s No.1 Independent Cruise Specialist, ROL Cruise.
				</p>
				<p className={styles.text}>
					While travelling abroad, it is very important to keep up to date on advice regarding your health and safety, <a href="/empty" className={styles.link}> please click here for more information.</a> For detailed advice on travel requirements from the Foreign & Commonwealth Office, <a href="/empty" className={styles.link}>please click here.</a>
				</p>
			</Container>
			<DestinationsMap />
		</Container>
	)
}
