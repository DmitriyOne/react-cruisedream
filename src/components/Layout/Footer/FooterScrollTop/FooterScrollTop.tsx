import { Button } from '../../../Button'

import arrowIcon from '../icons/arrow-top.svg'

import styles from './footer-scroll-top.module.scss'

export const FooterScrollTop = () => {
	const handlerClick = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}
	
	return (
		<Button
			className={styles.arrow}
			onClick={handlerClick}
		>
			<img
				src={arrowIcon}
				alt="Arrow top"
			/>
		</Button>
	)
}
