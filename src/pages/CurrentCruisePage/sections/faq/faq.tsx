import { useState } from 'react'

import { Accordion, Container, Heading } from '../../../../components'
import { DataFaq } from '../../../../fakedata'

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
				{DataFaq.map((faq, idx) =>
					<Accordion
						key={idx}
						componentClass={styles.accordionItem}
						titleClass={styles.accordionTitle}
						arrowClass={styles.accordionArrow}
						textClass={styles.accordionSubtitle}
						activeId={activeId}
						handleToggle={handleToggle}
						faq={faq}
					/>
				)}
			</div>
		</Container>
	)
}
