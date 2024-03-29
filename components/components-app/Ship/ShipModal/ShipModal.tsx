import { FC, useState } from 'react'
import Link from 'next/link'

import { CRUISE_ROUTES } from '@crdr/constants'

import { ICabinsShip } from '@crdr/interfaces'

import { Button, Heading, Modal, MyImage } from '@crdr/ui'

import styles from './ship-modal.module.scss'

interface IProps {
	onClosed?: () => void;
	currentCabin: ICabinsShip
	imageModal: string
}

export const ShipModal: FC<IProps> = ({ onClosed, currentCabin, imageModal }) => {
	const [shown, setShown] = useState(true)

	const handleModalClose = () => {
		setShown(false)

		if (onClosed) {
			onClosed()
		}
	}
	return (
		<Modal
			containerClass={styles.containerModal}
			bodyClass={styles.bodyModal}
			crossClass={styles.crossModal}
			isShow={shown}
			onClose={handleModalClose}
		>
			<div className={styles.header}>
				<Heading as="h3" className={styles.title}>
					MSC WORLD EUROPA - {currentCabin.title}
				</Heading>
			</div>

			<div className={styles.body}>
				<div className={styles.description}>
					<div className={styles.descImgWrapper}>
						<MyImage
							src={imageModal}
							alt="Cabin photo"
						/>
					</div>
					<div className={styles.descContentWrapper}>
						<Heading as="h4" className={styles.descTitle}>
							{currentCabin.title}
						</Heading>
						<span className={styles.descSize}>
							Размер каюты: {currentCabin.size} м
						</span>
						<p className={styles.descText}>
							{currentCabin.fullDesc}
						</p>
					</div>
				</div>

				<div className={styles.advantages}>
					<Heading as="h5" className={styles.advantagesTitle}>
						ПРЕИМУЩЕСТВА
					</Heading>
					<ul className={styles.advantagesUl}>
						{currentCabin.advantages.map((item, idx) =>
							<li key={idx} className={styles.advantagesItem}>
								{item.title}
							</li>
						)}
					</ul>
				</div>

				<div className={styles.buttonsRow}>
					<Button
						className={styles.button}
						onClick={handleModalClose}
					>
						ЗАКРЫТЬ
					</Button>
					<Link
						href={CRUISE_ROUTES.SEARCH}
						className={styles.button}
					>
						ПОИСК КРУИЗОВ
					</Link>
				</div>
			</div>
		</Modal>
	)
}
