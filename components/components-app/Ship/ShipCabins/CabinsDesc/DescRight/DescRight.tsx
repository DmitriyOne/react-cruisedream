/* eslint-disable max-len */
import { FC } from 'react'

import { useModal } from '@crdr/hooks'

import { ICabinsShip } from '@crdr/interfaces'

import { ShipModal } from '@crdr/components'
import { Button, Heading } from '@crdr/ui'

import styles from './desc-right.module.scss'

interface IProps {
	cabin: ICabinsShip
}

export const DescRight: FC<IProps> = ({ cabin }) => {
	const { handleModalOpen, isShowModal, handleModalClose } = useModal()

	const onClick = (e: any) => {
		e.preventDefault()
		handleModalOpen()
	}

	return (
		<>
			<Heading as="h4" className={styles.title}>
				{cabin.title}
			</Heading>
			<p className={styles.desc}>
				{cabin.sortDesc}
			</p>
			<Button className={styles.button} onClick={(e) => onClick(e)}>
				Описание
			</Button>
			{isShowModal &&
				<ShipModal
					currentCabin={cabin}
					imageModal={cabin.images[0].src}
					onClosed={handleModalClose}
				/>
			}
		</>
	)
}
