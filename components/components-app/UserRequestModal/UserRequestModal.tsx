import { FC, useState } from 'react'

import { Modal } from '@crdr/ui'

import { RequestModalForm } from './RequestModalForm/RequestModalForm'
import { RequestModalHeader } from './RequestModalHeader/RequestModalHeader'
import { RequestModalOptions } from './RequestModalOptions/RequestModalOptions'

import styles from './user-request-modal.module.scss'

interface IProps {
	onClosed?: () => void;
}

export const UserRequestModal: FC<IProps> = ({ onClosed }) => {
	const [shown, setShown] = useState(true)

	const handleModalClose = () => {
		setShown(false)

		if (onClosed) {
			onClosed()
		}
	}

	return (
		<Modal
			containerClass={styles.container}
			bodyClass={styles.body}
			isShow={shown}
			onClose={handleModalClose}
		>
			<RequestModalHeader />
			<RequestModalOptions />
			<RequestModalForm onClosed={onClosed} />
		</Modal>
	)
}
