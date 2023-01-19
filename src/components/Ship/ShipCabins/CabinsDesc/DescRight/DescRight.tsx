/* eslint-disable max-len */
import { FC } from 'react'

import { Button, Heading } from '../../../../../components-ui'
import { useModal } from '../../../../../hooks'
import { ICabinsModal, ICabinsShip } from '../../../../../model/interfaces'
import { ShipModal } from '../../../ShipModal/ShipModal'

import styles from './desc-right.module.scss'

interface IProps {
	cabins: ICabinsShip
	modal: ICabinsModal
}

export const DescRight: FC<IProps> = ({ cabins, modal }) => {
	const { handleModalOpen, isShowModal, handleModalClose } = useModal()

	const onClick = (e: any) => {
		e.preventDefault()
		handleModalOpen()
	}

	return (
		<>
			<Heading as="h4" className={styles.title}>
				{cabins.title}
			</Heading>
			<p className={styles.desc}>
				{cabins.description}
			</p>
			<Button className={styles.button} onClick={(e) => onClick(e)}>
				Описание
			</Button>
			{isShowModal &&
				<ShipModal
					modal={cabins.modal}
					onClosed={handleModalClose}
				/>
			}
		</>
	)
}
