import { tabs } from './data/tabs'

import { Tabs } from '../../../components'

import styles from './cruise-cabins.module.scss'

export const CruiseCabins = () => {
	return (
		<div className={styles.component}>
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
		</div>
	)
}
