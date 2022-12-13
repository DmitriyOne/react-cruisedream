import classNames from 'classnames'
import { FormEvent, useContext } from 'react'

import { SearchFiltersContext } from '../../../context'
import { Container, Button } from '../../../components'

import styles from './filter-buttons.module.scss'

export const FilterButtons = () => {
	const { isOpen, onToggle } = useContext(SearchFiltersContext)

	const handlerButtonApply = (e: FormEvent) => {
		e.preventDefault()
	}

	const handlerButtonFilter = (e: FormEvent) => {
		e.preventDefault()
		onToggle()
	}

	const buttonFiltersClass = classNames(
		styles.button,
		isOpen ? styles.filterHide : styles.filterShow
	)
	const buttonFiltersText = isOpen ? 'СВЕРНУТЬ ФИЛЬТР' : 'ПОКАЗАТЬ ФИЛЬТРЫ'

	return (
		<Container width="full" className={styles.component}>
			<Button
				className={buttonFiltersClass}
				onClick={handlerButtonFilter}
			>
				{buttonFiltersText}
			</Button>
			{isOpen &&
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
