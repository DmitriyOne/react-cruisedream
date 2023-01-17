import { useState } from 'react'

export const useModal = () => {
	const [isShowModal, setShowModal] = useState(false)

	const handleModalOpen = () => setShowModal(true)
	const handleModalClose = () => setShowModal(false)
	const handleToggleModal = () => setShowModal((isOpen) => !isOpen)

	return {
		isShowModal,
		handleModalOpen,
		handleModalClose,
		handleToggleModal,
	}
}
