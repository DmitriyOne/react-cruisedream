import { FC, FormEvent, useContext } from 'react'
import { components, MenuListProps } from 'react-select'
import { SelectContext } from '../../../context'

import { Button } from '../../Button'
import { Input } from '../../Input'

import styles from './custom-menu-list.module.scss'

export const CustomMenuList: FC<MenuListProps> = ({ selectProps, ...props }) => {
	const { onInputChange, inputValue } = selectProps
	const { onCloseSelect, onOpenSelect, isOpenSelect } = useContext(SelectContext)

	const ariaAttributes = {
		'aria-label': selectProps['aria-label'],
		'aria-labelledby': selectProps['aria-labelledby']
	}

	console.log(isOpenSelect)

	const onClickApply = (e: FormEvent) => {
		e.preventDefault()
		console.log('apply')

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
				onFocus={onOpenSelect}
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
			<Button className={styles.button} onClick={(e) => onClickApply(e)}>
				Применить
			</Button>
		</>
	)
}
