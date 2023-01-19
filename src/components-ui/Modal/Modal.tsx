import { useState, useEffect, MouseEvent, FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { useBodyOverflow } from '../../hooks'

import styles from './modal.module.scss'

interface IProps {
	isShow: boolean;
	onClose: () => void;
	title?: string;
	children: ReactNode
};

export const Modal: FC<IProps> = ({ isShow, onClose, children }) => {
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

	const modalContent = (
		<div className={styles.component}>
			<div className={styles.overlay} onClick={handleCloseClick} />
			<div className={styles.wrapper}>
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
