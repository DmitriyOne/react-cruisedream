import classNames from 'classnames'

import { CRUISE_SOCIAL_LINKS } from '../../../constants'

import { FiltersSelected } from '../../Filters/FiltersSelected/FiltersSelected'
import { Container, Logo, Button, } from '../../../components'
import { useScrollUp, useWindowSize } from '../../../hooks'

import styles from './sticky-search-page.module.scss'
import { FormEvent, useEffect, useState } from 'react'

export const StickySearchPage = () => {
	const [el, setEl] = useState(0)
	const { isDesktop } = useWindowSize()
	const { isScroll, isScrollUp, ref } = useScrollUp()

	useEffect(() => {
		const elScroll = ref.current!.getBoundingClientRect().top + window.scrollY
		setEl(elScroll)
	}, [ref, el])


	const scrollToElement = (e: FormEvent) => {
		e.preventDefault()

		window.scroll({
			top: el,
			behavior: 'smooth'
		})
	}

	const isFixed = isScroll && isDesktop
	const isShowFixed = isScrollUp && isDesktop
	return (
		<Container
			style={isFixed ? { paddingTop: `${ref.current?.offsetHeight}px` } : undefined}
			ref={ref}
			width="full"
			className={styles.component}
		>
			<Container
				width="full"
				className={classNames(
					styles.container,
					isFixed ? styles.fixed : undefined,
					isShowFixed ? styles.show : undefined
				)}
			>
				<Logo className={classNames(
					styles.logo,
					isFixed ? styles.show : undefined
				)} />
				<div className={styles.wrapper}>
					<FiltersSelected />
					<Button
						className={classNames(
							styles.button,
							isFixed ? styles.show : undefined
						)}
						onClick={scrollToElement}
					>
						ПОКАЗАТЬ ФИЛЬТРЫ
					</Button>
				</div>
				<div className={styles.phoneWrapper}>
					<a
						href={`tel:${CRUISE_SOCIAL_LINKS.phone}>`}
						className={classNames(
							styles.phone,
							isFixed ? styles.show : undefined
						)}
					>
						+7 499 653 89 91
					</a>
				</div>
			</Container>
		</Container>
	)
}
