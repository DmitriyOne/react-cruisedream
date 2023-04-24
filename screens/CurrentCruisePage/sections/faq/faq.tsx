import { useState } from 'react'

import { dataFaq } from '@crdr/fakedata'

import { Accordion, Container, Heading } from '@crdr/ui'

import styles from './faq.module.scss'

export const FAQ = () => {
	const [activeId, setActive] = useState<number | null>(null)

	const handleToggle = (idx: number) => {
		if (activeId === idx) {
			setActive(null)
		} else {
			setActive(idx)
		}
	}

	return (
		<Container width="full" className={styles.component} tag="section">
			<div className={styles.container}>
				<Heading as="h4" className={styles.title}>
					ЧАСТО ЗАДАВЕМЫЕ ВОПРОСЫ
				</Heading>
				{dataFaq.map((faq, idx) =>
					<Accordion
						key={idx}
						componentClass={styles.accordionItem}
						titleClass={styles.accordionTitle}
						arrowClass={styles.accordionArrow}
						textClass={styles.accordionSubtitle}
						activeId={activeId}
						handleToggle={handleToggle}
						accordion={faq}
						accordionId={idx}
					/>
				)}
			</div>
		</Container>
	)
}
