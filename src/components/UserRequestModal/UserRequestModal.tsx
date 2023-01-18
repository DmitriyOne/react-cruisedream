import { FC, useState } from 'react'

import { Modal } from '../../components-ui'

import { RequestModalForm } from './RequestModalForm/RequestModalForm'
import { RequestModalHeader } from './RequestModalHeader/RequestModalHeader'
import { RequestModalOptions } from './RequestModalOptions/RequestModalOptions'

interface IProps {
	onClosed?: () => void;
};

export const UserRequestModal: FC<IProps> = ({ onClosed }) => {
	const [shown, setShown] = useState(true)

	const handleModalClose = () => {
		setShown(false)

		if (onClosed) {
			onClosed()
		}
	}

	const handleModalOpen= () => {
		setShown(true)
	}

	return (
		<Modal isShow={shown} onOpen={handleModalOpen} onClose={handleModalClose}>
			<RequestModalHeader />
			<RequestModalOptions />
			<RequestModalForm />
		</Modal>
	)
}
