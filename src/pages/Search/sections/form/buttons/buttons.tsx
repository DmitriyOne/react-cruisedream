import classNames from 'classnames'
import { FormEvent, useContext } from 'react'
import { Button, Container } from '../../../../../components'
import { SearchFiltersContext } from '../../../../../context'

import styles from './buttons.module.scss'

export const Buttons = () => {
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
