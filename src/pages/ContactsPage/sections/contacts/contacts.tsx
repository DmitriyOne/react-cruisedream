import classNames from 'classnames'

import { Container, Heading } from '../../../../components-ui'
import { CRUISE_GMAILS, CRUISE_PAYMENT, CRUISE_SOCIAL_LINKS } from '../../../../constants'

import whatsappIcon from '../../../../assets/images/messengers/whatsapp.svg'
import telegramIcon from '../../../../assets/images/messengers/telegram.svg'

import styles from './contacts.module.scss'

export const Contacts = () => {

	const linkBlue = classNames(
		styles.link,
		styles.textLarge,
		styles.blue,
	)
	const linkGray = classNames(
		styles.link,
		styles.textLarge,
		styles.gray,
	)
	const linkPhoneClass = classNames(
		linkBlue,
		styles.phone
	)
	const textBlue = classNames(
		styles.text,
		styles.textLarge,
		styles.blue,
	)
	const textGray = classNames(
		styles.text,
		styles.textLarge,
		styles.gray,
	)
	const linkTextSmall = classNames(
		linkGray,
		styles.textSmall,
	)
	return (
		<Container
			width="full"
			className={classNames(styles.component, 'pt-section', 'pb-section')}
			tag="section"
		>
			<Container
				direction="column"
				align="start"
			>
				<Heading as="h2" className="title-secondary">
					КОНТАКТЫ
				</Heading>
				<div className={styles.blocks}>
					<a
						href={`tel:${CRUISE_SOCIAL_LINKS.phone}`}
						className={linkPhoneClass}
						target="_blank" rel="noreferrer"
					>
						+7 499 653 89 91
					</a>
					<span className={textBlue}>
						ОСНОВНОЙ ОФИС:
					</span>
					<a
						href={CRUISE_SOCIAL_LINKS.map}
						className={linkGray}
						target="_blank" rel="noreferrer"
					>
						142601, г. Санкт-Петербург, ул. Ленина, д. 99, 45 этаж
					</a>
				</div>

				<div className={styles.blocks}>
					<span className={textGray}>
						ООО «CRUISEDREAM»
					</span>
					<span className={textGray}>
						ИНН: {CRUISE_PAYMENT.inn}
					</span>
					<span className={textGray}>
						КПП: {CRUISE_PAYMENT.kpp}
					</span>
					<span className={textGray}>
						ОГРН: {CRUISE_PAYMENT.ogrn}
					</span>
					<span className={textGray}>
						Расч. счёт: {CRUISE_PAYMENT.check1}
					</span>
					<span className={textGray}>
						Корр. счёт: {CRUISE_PAYMENT.check2}
					</span>
					<span className={textGray}>
						БИК: {CRUISE_PAYMENT.bik}
					</span>
					<span className={textGray}>
						Юридический адрес: {CRUISE_PAYMENT.legal_address}
					</span>
				</div>

				<div className={styles.blocks}>
					<span className={classNames(styles.gmailItem, textGray)}>
						ПО ВОПРОСАМ ПАРТНЕРСТВА: &nbsp;
						<a
							href={`mailto:${CRUISE_GMAILS.partnerships}`}
							className={linkTextSmall}
							target="_blank" rel="noreferrer"
						>
							{CRUISE_GMAILS.partnerships}
						</a>
					</span>
					<span className={classNames(styles.gmailItem, textGray)}>
						ВАКАНСИЙ: &nbsp;
						<a
							href={`mailto:${CRUISE_GMAILS.vacancies}`}
							className={linkTextSmall}
							target="_blank" rel="noreferrer"
						>
							{CRUISE_GMAILS.vacancies}
						</a>
					</span>
					<span className={classNames(styles.gmailItem, textGray)}>
						РЕКЛАМА: &nbsp;
						<a
							href={`mailto:${CRUISE_GMAILS.advertising}`}
							className={linkTextSmall}
							target="_blank" rel="noreferrer"
						>
							{CRUISE_GMAILS.advertising}
						</a>
					</span>
					<span className={classNames(styles.gmailItem, textGray)}>
						КОРПОРАТИВНЫЙ EMAIL: &nbsp;
						<a
							href={`mailto:${CRUISE_GMAILS.corporate}`}
							className={linkTextSmall}
							target="_blank" rel="noreferrer"
						>
							{CRUISE_GMAILS.corporate}
						</a>
					</span>
				</div>

				<div className={styles.blocks}>
					<span className={textBlue}>
						МЕССЕНДЖЕРЫ:
					</span>
					<div className={styles.messengersRow}>
						<a
							href={CRUISE_SOCIAL_LINKS.telegram}
							className={styles.messengersLink}
							target="_blank" rel="noreferrer"
						>
							<span className={styles.messengersIcon}>
								<img src={telegramIcon} alt="Telegram icon" />
							</span>
							Telegram
						</a>

						<a
							href={CRUISE_SOCIAL_LINKS.whatsapp}
							className={styles.messengersLink}
							target="_blank" rel="noreferrer"
						>
							<span className={styles.messengersIcon}>
								<img src={whatsappIcon} alt="Whatsapp icon" />
							</span>
							WhatsApp
						</a>

					</div>
				</div>

			</Container>
		</Container >
	)
}
