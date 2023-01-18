import { useState, useEffect, MouseEvent, FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useBodyOverflow } from '../../hooks'

import styles from './modal.module.scss'

interface IProps {
	isShow: boolean;
	onClose: () => void;
	onOpen: () => void;
	title?: string;
	children: ReactNode
};

export const Modal: FC<IProps> = ({ isShow, onOpen, onClose, children }) => {
	const [isBrowser, setIsBrowser] = useState(false)
	useBodyOverflow(isShow)

	useEffect(() => {
		setIsBrowser(true)
	}, [])

	const handleCloseClick = (
		e: MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		e.preventDefault()
		e.stopPropagation()
		onClose()
	}

	const handleShowClick = (
		e: MouseEvent<HTMLButtonElement | HTMLDivElement>
	) => {
		e.preventDefault()
		e.stopPropagation()
		onOpen()
	}

	const modalContent = (
		<div className={styles.overlay} onClick={handleCloseClick} >
			{/* <div className={styles.overlay} onClick={handleCloseClick} /> */}
			<div className={styles.component} onClick={handleShowClick}>
				<div className={styles.body}>
					{children}
				</div>
			</div>
		</div>
	)

	if (isBrowser) {
		return createPortal(modalContent, document.getElementById('modal-root')!)
	} else {
		return null
	}
}
