/* eslint-disable max-len */
import classNames from 'classnames'

import { Container, Heading } from '../../../../components-ui'
import { CRUISE_ROUTES } from '../../../../constants'

import styles from './about-us.module.scss'

export const AboutUs = () => {
	return (
		<Container
			width="full"
			className={classNames(styles.component, 'pt-section', 'pb-s-section')}
			tag="section"
		>
			<Container direction="column" align="center">
				<Heading as="h2" className="title-secondary">
					О НАС
				</Heading>
				<p className={styles.desc}>
					Круизная компания CRUISEDREAM основана в 1990 году и предлагает Вам незабываемые морские путешествия по всему миру на роскошных круизных лайнерах компаний Cruise Line, MSC, Costa Cruises, Silversea Cruises, Star Clippers, Royal Caribbean Cruises, Celebrity Cruises.
				</p>
				<p className={styles.desc}>
					Мы настоящая команда опытных профессионалов  и с радостью поможем Вам подобрать именно тот круиз, лайнер и каюту, которые порадуют Вас! В нашем круизе Вы сможете полностью расслабиться и отдыхать, не беспокоясь ни о чем!
					Компания CRUISEDREAM предлогает Вам полный комплекс услуг, включая  авиаперелета, оформлению виз и страховок под Ваше путешествие. А также по необходимости мы подберем для Вас отель до или после круиза, трансферы и предложим экскурсионные программы и развлечения.
					Мы ценим, что Вы выбрали нашу компанию для организации своего незабываемого путешествия.
				</p>
				<a
					href={CRUISE_ROUTES.EMPTY}
					className={styles.link}
					target="_blank" rel="noreferrer"
				>
					Откройте новые горизонты с CRUISEDREAM!
				</a>
			</Container>
		</Container>
	)
}
