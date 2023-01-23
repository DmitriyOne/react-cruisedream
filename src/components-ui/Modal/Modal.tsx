import classNames from 'classnames'
import { useState, useEffect, MouseEvent, FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { Button } from '../../components-ui'
import { useBodyOverflow } from '../../hooks'

import closeIcon from './icon/close.svg'

import styles from './modal.module.scss'

interface IProps {
	isShow: boolean;
	onClose: () => void;
	title?: string;
	children: ReactNode
	containerClass?: string
	bodyClass?: string
	crossClass?: string
};

export const Modal: FC<IProps> = ({
	isShow,
	onClose,
	children,
	containerClass,
	bodyClass,
	crossClass,
}) => {
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

	const containerClassName = classNames(containerClass, styles.container)
	const bodyClassName = classNames(bodyClass, styles.body)
	const crossClassName = classNames(crossClass, styles.cross)

	const modalContent = (
		<div className={styles.component}>
			<div className={styles.overlay} onClick={handleCloseClick} />
			<div className={containerClassName}>
				<Button className={crossClassName} onClick={handleCloseClick}>
					<img src={closeIcon} alt={''} />
				</Button>
				<div className={bodyClassName}>
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
