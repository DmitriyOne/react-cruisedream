import { useState, useEffect, MouseEvent, FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

import styles from './modal.module.scss'

interface IProps {
	isShow: boolean;
	onClose: () => void;
	title?: string;
	children: ReactNode
};

export const Modal: FC<IProps> = ({ onClose, children }) => {
	const [isBrowser, setIsBrowser] = useState(false)

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

	const modalContent = (
		<>
			<div className={styles.overlay} onClick={handleCloseClick} />
			<div className={styles.component}>
				<div className={styles.body}>
					{children}
				</div>
			</div>
		</>
	)

	if (isBrowser) {
		return createPortal(modalContent, document.getElementById('modal-root')!)
	} else {
		return null
	}
}
