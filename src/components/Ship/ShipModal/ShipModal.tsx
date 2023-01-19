import { FC, useState } from 'react'

import { Modal } from '../../../components-ui'
import { ICabinsModal } from '../../../model/interfaces'

import styles from './ship-modal.module.scss'

interface IProps {
	onClosed?: () => void;
	modal: ICabinsModal
}

export const ShipModal: FC<IProps> = ({ onClosed, modal }) => {
	const [shown, setShown] = useState(true)

	const handleModalClose = () => {
		setShown(false)

		if (onClosed) {
			onClosed()
		}
	}
	return (
		<Modal isShow={shown} onClose={handleModalClose}>
			<b style={{ marginBottom: '20px' }}>
				{modal.title}
			</b>
			<div>
				{modal.description}
			</div>
		</Modal>
	)
}
