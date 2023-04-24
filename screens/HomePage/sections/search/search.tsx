import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { CRUISE_ROUTES, CRUISE_SOCIAL_LINKS } from '@crdr/constants'
import { useScrollUp, useWindowSize } from '@crdr/hooks'

import { CompanySelect, DatepickerSelector, RegionSelect } from '@crdr/components'
import { Button, Container, Logo } from '@crdr/ui'

import styles from './search.module.scss'

export const Search = () => {
	const route = useRouter()
	const { isDesktop } = useWindowSize()
	const { isScroll, isScrollUp, ref } = useScrollUp()

	const handlerClick = (e: FormEvent) => {
		e.preventDefault()
		route.push(CRUISE_ROUTES.SEARCH)
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
				<form className={styles.form}>
					<RegionSelect
						classComponent={styles.col}
						classPrefix="select-transparent"
					/>
					<CompanySelect
						classComponent={styles.col}
						classPrefix="select-transparent"
					/>
					<DatepickerSelector
						componentClass={styles.col}
						inputClass={styles.inputDatepicker}
						isBorderBottom
					/>
					<Button
						className={styles.button}
						onClick={handlerClick}
					>
						НАЙТИ КРУИЗ
					</Button>
				</form>
				<div>
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
		</Container >
	)
}
