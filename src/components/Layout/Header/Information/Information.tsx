import classNames from 'classnames'
import { useState } from 'react'

import { B, Button, Container } from '../../../../components'

import closeIcon from './icons/close.svg'

import styles from './information.module.scss'

export const Information = () => {
	const [isShow, setIsShow] = useState(true)
	const [isRemove, setIsRemove] = useState(true)

	const handlerClick = () => {
		setIsRemove(prev => !prev)
		setTimeout(() => {
			setIsShow(prev => !prev)
		}, 400)
	}

	const componentClassName = classNames(styles.component, {
		[styles.remove]: !isRemove
	})

	return (
		<>
			{isShow &&
				<Container
					width="full"
					className={componentClassName}
				>
					<Container
						width="container"
						className={styles.container}
					>
						<span className={styles.text}>
							<B
								fontWeight={700}
								className={styles.b}
							>
								ИНФОРМАЦИЯ:&nbsp;
							</B>
							самая актуальная информация на данный момент
						</span>
						<Button
							className={styles.button}
							onClick={handlerClick}
						>
							<img
								src={closeIcon}
								alt="Close icon"
							/>
						</Button>
					</Container>
				</Container>
			}
		</>
	)
}
