import { FC, FormEvent, useContext } from 'react'
import { components, MenuProps } from 'react-select'
import { SelectContext } from '../../../context'

import { Button } from '../../Button'

import styles from '../my-select.module.scss'

export const CustomMenuOptions: FC<MenuProps> = ({ ...props }) => {
	const { onCloseSelect } = useContext(SelectContext)

	const onClick = (e: FormEvent) => {
		e.preventDefault()
		onCloseSelect()
	}
	return (
		<div>
			<components.Menu {...props}>
				<div>
					{props.children}
				</div>
				<Button className={styles.button} onClick={(e) => onClick(e)}>
					Применить
				</Button>
			</components.Menu>
		</div>
	)
}
