import classNames from 'classnames'
import { useState } from 'react'

import { Accordion, Container, Heading } from '../../../components'

import styles from './regions-accordion.module.scss'

const accordionDropdown1 = [
	{ text: 'Рим' },
	{ text: 'Неаполь' },
	{ text: 'Барселона' },
	{ text: 'Марсель' },
]

const accordionDropdown2 = [
	{ text: 'Марсель' },
	{ text: 'Неаполь' },
	{ text: 'Барселона' },
	{ text: 'Рим' },
	{ text: 'Средиземное море' },
	{ text: 'ОАЭ' },
]

const dataRegionsAccordion = [
	{
		id: 1,
		title: 'Средиземное море',
		links: accordionDropdown1,
		href: '/#'
	},
	{
		id: 2,
		title: 'Северная Европа',
		links: accordionDropdown2,
		href: '/#'
	},
	{
		id: 3,
		title: 'ОАЭ',
		links: accordionDropdown1,
		href: '/#'
	},
	{
		id: 4,
		title: 'Красное море',
		links: accordionDropdown2,
		href: '/#'
	},
	{
		id: 5,
		title: 'Карибские острова',
		links: accordionDropdown1,
		href: '/#'
	},
]

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
			className={classNames(styles.component, 'pt-section')}
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
					{dataRegionsAccordion.map((accordion, idx) =>
						<Accordion
							key={idx}
							componentClass={styles.accordionItem}
							titleClass={styles.accordionTitle}
							arrowClass={styles.accordionArrow}
							textClass={styles.accordionSubtitle}
							activeId={activeId}
							handleToggle={handleToggle}
							accordion={accordion}
						/>
					)}
				</div>
			</Container>
		</Container>
	)
}
