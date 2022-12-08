import classNames from 'classnames'

import { CRUISE_SOCIAL_LINKS } from '../../../constants'

import { FiltersSelected } from '../../Filters'
import { Container, Logo, Button,  } from '../../../components'
import { useScrollUp, useWindowSize } from '../../../hooks'

import styles from './sticky-search-page.module.scss'

export const StickySearchPage = () => {
	const { isDesktop } = useWindowSize()
	const { isScroll, isScrollUp, ref } = useScrollUp()

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
					>
						ПОКАЗАТЬ ФИЛЬТРЫ
					</Button>
				</div>
				<a
					href={`tel:${CRUISE_SOCIAL_LINKS.phone}>`}
					className={classNames(
						styles.phone,
						isFixed ? styles.show : undefined
					)}
				>
					+7 499 653 89 91
				</a>
			</Container>
		</Container>
	)
}
