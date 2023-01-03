import { FC, FormEvent, useContext } from 'react'
import { components, MenuProps, MenuListProps } from 'react-select'
import { SelectContext } from '../../../context'

import { Button } from '../../Button'
import { Input } from '../../Input'

import styles from './custom-menu-list.module.scss'

export const CustomMenuList: FC<MenuListProps> = ({ selectProps, ...props }) => {
	const { onInputChange, inputValue, onFocus } = selectProps
	const { onCloseSelect } = useContext(SelectContext)

	const ariaAttributes = {
		'aria-label': selectProps['aria-label'],
		'aria-labelledby': selectProps['aria-labelledby']
	}

	const onClick = (e: FormEvent) => {
		e.preventDefault()
		onCloseSelect()
	}

	return (
		<>
			<Input
				labelPosition="left"
				componentClassName={styles.inputWrapper}
				labelClassName={styles.label}
				inputClassName={styles.input}
				value={inputValue}
				onChange={(e) =>
					onInputChange(e.currentTarget.value, {
						action: 'input-change',
						prevInputValue: ''
					})
				}
				onFocus={onFocus}
				onMouseDown={(e: any) => {
					e.stopPropagation()
					e.target.focus()
				}}
				onTouchEnd={(e: any) => {
					e.stopPropagation()
					e.target.focus()
				}}
				placeholder="поиск"
				{...ariaAttributes}
			/>
			<components.MenuList {...props} selectProps={selectProps} />
			<Button className={styles.button} onClick={(e) => onClick(e)}>
				Применить
			</Button>
		</>
	)
}
