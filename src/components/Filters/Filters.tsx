import { FC, useContext } from 'react'

import { SearchFiltersContext } from '../../context'
import { Container, Heading } from '../../components-ui'

import { FiltersVisible } from './FiltersVisible/FiltersVisible'
import { FiltersHidden } from './FiltersHidden/FiltersHidden'
import { FilterButtons } from './FilterButtons/FilterButtons'

import styles from './filter.module.scss'
import classNames from 'classnames'

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
	const { isOpen } = useContext(SearchFiltersContext)

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
					Круизы по Карибскому морю с Royal Caribbean
				</Heading>
				{subtitle && <p className={styles.subtitle}>
					{subtitle}
				</p>}
				<form className={styles.form}>
					<FiltersVisible />
					{isOpen && <FiltersHidden isOpen={isOpen} isBgImage={!!backgroundImage} />}
					<FilterButtons />
				</form>
			</div>
		</Container>
	)
}
