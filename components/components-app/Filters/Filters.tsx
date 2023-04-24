import { FC, useContext } from 'react'
import classNames from 'classnames'

import {  SearchSelectorsContext, SearchTitleContext } from '@crdr/context'

import { B, Container, Heading } from '@crdr/ui'

import { FilterButtons } from './FilterButtons/FilterButtons'
import { FiltersHidden } from './FiltersHidden/FiltersHidden'
import { FiltersVisible } from './FiltersVisible/FiltersVisible'

import styles from './filter.module.scss'

interface IProps {
	backgroundImage?: string
	backgroundColor?: string
	containerBg?: string
	subtitle?: string
}

export const Filters: FC<IProps> = ({
	backgroundColor = '#004a763b',
	containerBg,
	backgroundImage,
	subtitle,
}) => {
	const { isShowHiddenSelectors } = useContext(SearchSelectorsContext)
	const { regionTitle, companyTitle } = useContext(SearchTitleContext)

	const containerClass = classNames(styles.container, {
		[styles.containerFilter]: containerBg,
		[styles.containerPadding]: containerBg,
	})
	return (
		<Container
			width="full"
			className={styles.component}
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundColor: backgroundColor,
			}}
		>
			<div
				className={containerClass}
				style={{
					backgroundColor: containerBg,
				}}
			>
				<Heading className={styles.title}>
					Круизы по <B>{regionTitle}</B> {companyTitle}
				</Heading>
				{subtitle && <p className={styles.subtitle}>
					{subtitle}
				</p>}
				<form className={styles.form}>
					<FiltersVisible />
					{isShowHiddenSelectors &&
						<FiltersHidden
							isOpen={isShowHiddenSelectors}
							isBgImage={!!backgroundImage} />
					}
					<FilterButtons />
				</form>
			</div>
		</Container>
	)
}
