import { FC, MouseEvent, ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import { createPortal } from 'react-dom'

import { useBodyOverflow } from '@crdr/hooks'

import { Button, MyImage } from '@crdr/ui'

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
}

export const Modal: FC<IProps> = ({
	isShow,
	onClose,
	children,
	containerClass,
	bodyClass,
	crossClass,
}) => {
	const [domReady, setDomReady] = useState(false)
	useBodyOverflow(isShow)

	useEffect(() => {
		setDomReady(true)
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
					<MyImage
						src={closeIcon}
						alt="Cross icon"
					/>
				</Button>
				<div className={bodyClassName}>
					{children}
				</div>
			</div>
		</div>
	)

	if (domReady) {
		return createPortal(modalContent, document.getElementById('modal-root')!)
	} else {
		return null
	}
}
