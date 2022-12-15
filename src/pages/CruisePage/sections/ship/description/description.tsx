import { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import arrowIcon from '../../../../../assets/images/ship/arrow.svg'

import { B, Button, Heading } from '../../../../../components'
import { IShipLinks } from '../../../../../model/interfaces'

import styles from './description.module.scss'
import { params } from './swiper'

interface IProps {
	name: string
	year: number
	capacity: number
	weight: number
	team: number
	description: string
	links: IShipLinks[]
}

export const Description: FC<IProps> = ({
	name,
	year,
	capacity,
	weight,
	team,
	description,
	links
}) => {
	const [isReadMore, setIsReadMore] = useState(true)
	const text = description
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore)
	}

	return (
		<div className={styles.component}>

			<div className={styles.wrapper}>
				<Heading as="h3" className={styles.title}>
					<B fontWeight={600}> Лайнер {name}</B>
					<span className={styles.titleLine} />
				</Heading>

				<div className={styles.infoWrapper}>
					<div className={styles.infoCol}>
						<Heading as="h5" className={styles.infoTitle}>
							Год постройки:
						</Heading>
						<B fontWeight={600} className={styles.infoNumbers}>
							{year}
						</B>
					</div>
					<div className={styles.infoCol}>
						<Heading as="h5" className={styles.infoTitle}>
							Вместимость:
						</Heading>
						<B fontWeight={600} className={styles.infoNumbers}>
							{capacity}
						</B>
					</div>
					<div className={styles.infoCol}>
						<Heading as="h5" className={styles.infoTitle}>
							Водоизмещение:
						</Heading>
						<B fontWeight={600} className={styles.infoNumbers}>
							{weight}
						</B>
					</div>
					<div className={styles.infoCol}>
						<Heading as="h5" className={styles.infoTitle}>
							Команда:
						</Heading>
						<B fontWeight={600} className={styles.infoNumbers}>
							{team}
						</B>
					</div>
				</div>

				<div className={styles.descWrapper}>
					<p className={styles.desc}>
						{isReadMore ? (text.slice(0, 350) + '...') : text}
					</p>
					<Button
						className={styles.descButton}
						onClick={toggleReadMore}
					>
						{isReadMore ? 'Читать далее' : ' Скрыть'}
					</Button>
				</div>
			</div>

			<ul className={styles.linkWrapper}>
				{links.map((item, idx) =>
					<li key={idx} className={styles.linksItem}>
						<a href={item.href} className={styles.link}>
							<span className={styles.linkText}>
								{item.text}
							</span>
							<span className={styles.linkArrow}>
								<img src={arrowIcon} alt="Arrow icon" />
							</span>
						</a>
					</li>
				)}
			</ul>
		</div >
	)
}
