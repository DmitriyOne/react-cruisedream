import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { Button, MyImage } from '@crdr/ui'

import arrowIcon from './icon/arrow-top.svg'

import styles from './scroll-top.module.scss'

export const ScrollTop = () => {
	const [isShow, setIsShow] = useState(false)
	const handlerClick = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		function scrollTop() {
			if (window.scrollY >= 150) {
				setIsShow(true)
			} else {
				setIsShow(false)
			}
		}

		window.addEventListener('scroll', scrollTop)
		scrollTop()

		return () => window.removeEventListener('scroll', scrollTop)
	}, [])

	return (
		<>
			<Button
				className={classNames(
					styles.component,
					isShow ? styles.active : ''
				)}
				onClick={handlerClick}
			>
				<MyImage
					src={arrowIcon}
					alt="Arrow scroll top"
				/>
			</Button>
		</>
	)
}
