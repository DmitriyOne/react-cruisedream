/* eslint-disable no-unused-vars */
import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { B } from '../../../../components-ui'
import { UserRequestModal } from '../../../../components-ui/Modal/UserRequestModal/UserRequestModal'
import { useModal } from '../../../../hooks'

import styles from './intro-home-content.module.scss'

enum ETextDirection {
	left = 'left',
	center = 'center',
	right = 'right'
}

interface IProps {
	variant?: keyof typeof ETextDirection
	title?: string
	href?: string
	discount?: number
}

export const IntroHomeContent: FC<IProps> = ({
	variant,
	title,
	href,
	discount,
}) => {
	const { handleModalOpen, isShowModal, handleModalClose } = useModal()

	const onClick = (e: any) => {
		e.preventDefault()
		handleModalOpen()
	}

	const textPosition = classNames({
		[styles.left]: variant === 'left',
		[styles.center]: variant === 'center',
		[styles.right]: variant === 'right'
	})
	return (
		<div className={classNames(
			styles.component,
			textPosition
		)}>
			<h1 className={styles.title}>
				<span className={styles.textSale}>
					АКЦИЯ
					<span className={styles.textSaleDamion}>
						-{discount}%
					</span>
				</span>
				{title}
			</h1>
			<Link
				to={href!}
				className={styles.button}
				onClick={(e) => onClick(e)}
			>
				<B fontWeight={500}>
					ЗАБРОНИРОВАТЬ
				</B>
			</Link>
			{isShowModal && <UserRequestModal onClosed={handleModalClose} />}
		</div>
	)
}
