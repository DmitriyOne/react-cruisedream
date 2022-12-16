import classNames from 'classnames'

import { DataFaq } from '../../fakedata'

import { Heading } from '../../components'
import { useAccordion } from '../../hooks'

import arrowIcon from './icons/arrow-down.svg'

import styles from './faq-component.module.scss'

export const FaqComponent = () => {
	const { selected, toggle } = useAccordion()

	return (
		<>
			<Heading as="h4" className={styles.title}>
				ЧАСТО ЗАДАВЕМЫЕ ВОПРОСЫ
			</Heading>
			<ul className={styles.accordion}>
				{DataFaq.map((item, idx) => {
					const isSelected: boolean = selected === idx
					const arrowActiveClass = classNames(styles.arrow, {
						[styles.active]: isSelected
					})

					return (
						<li key={idx} className={styles.accordionItem}>
							<Heading as="h5" className={styles.accordionTitle}>
								{item.title}
								<span className={styles.accordionArrow}>
									<img src={arrowIcon} alt="Arrow icon" />
								</span>
							</Heading>
							<p className={styles.accordionSubtitle}>
								{item.subtitle}
							</p>
						</li>
					)
				})}
			</ul>
		</>
	)
}
