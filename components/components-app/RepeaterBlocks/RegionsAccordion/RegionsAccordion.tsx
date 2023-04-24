import { useState } from 'react'
import classNames from 'classnames'

import { dataRegionsOfSailingsAccordion } from '@crdr/fakedata'

import { Accordion, Container, Heading } from '@crdr/ui'

import styles from './regions-accordion.module.scss'

export const RegionsAccordion = () => {
	const [activeId, setActive] = useState<number | null>(null)

	const handleToggle = (idx: number) => {
		if (activeId === idx) {
			setActive(null)
		} else {
			setActive(idx)
		}
	}

	return (
		<Container
			width="full"
			className={classNames(styles.component)}
			tag="section"
		>
			<Container width="containerS" direction="column">
				<Heading
					as="h2"
					className={classNames('title-secondary', styles.title)}
				>
					РЕГИОНЫ ПЛАВАНЬЯ MSC CRUISES
				</Heading>
				<div className={styles.wrapper}>
					{dataRegionsOfSailingsAccordion.map((accordion, idx) =>
						<Accordion
							key={idx}
							componentClass={styles.accordionItem}
							titleClass={styles.accordionTitle}
							arrowClass={styles.accordionArrow}
							linkClass={styles.accordionLink}
							bodyClass={styles.accordionBody}
							activeId={activeId}
							handleToggle={handleToggle}
							accordion={accordion}
							accordionId={idx}
						/>
					)}
				</div>
			</Container>
		</Container>
	)
}
