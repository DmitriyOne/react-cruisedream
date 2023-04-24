import { FC, FormEvent, useMemo } from 'react'
import { components, MenuListProps } from 'react-select'

import { Button, Input } from '@crdr/ui'

import styles from './custom-menu-list.module.scss'

export const CustomMenuList: FC<MenuListProps> = ({ selectProps, ...props }) => {
	const { onInputChange, inputValue, onMenuOpen, onMenuClose } = selectProps

	const ariaAttributes = {
		'aria-label': selectProps['aria-label'],
		'aria-labelledby': selectProps['aria-labelledby'],
	}

	const onClickApply = (e: FormEvent) => {
		e.preventDefault()
		onMenuClose()
	}

	const memoizedMenu = useMemo(() => {
		return (
			<>
				<Input
					width="auto"
					labelPosition="left"
					componentClassName={styles.inputWrapper}
					labelClassName={styles.label}
					inputClassName={styles.input}
					value={inputValue}
					onChange={(e) =>
						onInputChange(e.currentTarget.value, {
							action: 'input-change',
							prevInputValue: '',
						})
					}
					onFocus={onMenuOpen}
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props])

	return memoizedMenu
}
