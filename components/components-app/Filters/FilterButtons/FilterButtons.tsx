import { FormEvent, useContext } from 'react'
import classNames from 'classnames'

import {  SearchSelectorsContext } from '@crdr/context'

import { Button,Container } from '@crdr/ui'

import styles from './filter-buttons.module.scss'

export const FilterButtons = () => {
	const { isShowHiddenSelectors, onToggleHiddenSelectors } = useContext(SearchSelectorsContext)

	const handlerButtonApply = (e: FormEvent) => {
		e.preventDefault()
	}

	const handlerButtonFilter = (e: FormEvent) => {
		e.preventDefault()
		onToggleHiddenSelectors()
	}

	const buttonFiltersClass = classNames(
		styles.button,
		isShowHiddenSelectors ? styles.filterHide : styles.filterShow
	)
	const buttonFiltersText = isShowHiddenSelectors ? 'СВЕРНУТЬ ФИЛЬТР' : 'ПОКАЗАТЬ ФИЛЬТРЫ'

	return (
		<Container width="full" className={styles.component}>
			<Button
				className={buttonFiltersClass}
				onClick={handlerButtonFilter}
			>
				{buttonFiltersText}
			</Button>
			{isShowHiddenSelectors &&
				<Button
					className={classNames(
						styles.button,
						styles.buttonApply
					)}
					onClick={handlerButtonApply}
				>
					ПРИМЕНИТЬ
				</Button>
			}
		</Container>
	)
}
