import classNames from 'classnames'

import { Container, Heading, Tabs } from '@crdr/ui'

import { tabs } from './data/tabs'

import styles from './ship-cabins.module.scss'

export const ShipCabins = () => {
	return (
		<Container
			width="full"
			className={classNames(styles.component, 'pt-section')}
			direction="column"
			tag="section"
		>
			<Heading as="h2" className={styles.title}>
				КАЮТЫ НА ЛАЙНЕРЕ MSC WORLD EUROPA
			</Heading>
			<Tabs
				items={tabs}
				headerClass={styles.tabsHeader}
				headerWrapperClass={styles.tabsHeaderWrapper}
				bodyClass={styles.tabsBody}
				titleClass={styles.tabsTitle}
				titleActiveClass={styles.active}
				subTitleClass={styles.tabsSubtitle}
				isHeaderWrapper
			/>
		</Container>
	)
}
