import { useContext } from 'react'
import classNames from 'classnames'

import { HeaderContext } from '../../../context'
import { useInput } from '../../../hooks'

import { Button } from '../../../components-ui/Button'
import { Input } from '../../Input'

import searchIcon from './icons/search.svg'
import crossIcon from './icons/cross.svg'

import styles from './input-search.module.scss'


export const InputSearch = () => {
	const { isOpenSearch } = useContext(HeaderContext)
	const input = useInput('')

	const componentClass = classNames(styles.component, {
		[styles.show]: isOpenSearch
	})

	return (
		<div className={componentClass}>
			<form className={styles.form}>
				<Input
					componentClassName={styles.inputWrapper}
					inputClassName={styles.input}
					labelClassName={styles.label}
					type="text"
					labelText="Поиск по сайту"
					labelPosition="top"
					{...input.bind}
				>
					<span className={styles.search}>
						<img src={searchIcon} alt="Search Icon" />
					</span>
					{input.value.length >= 1 &&
						<Button className={styles.reset} onClick={input.reset}>
							<img src={crossIcon} alt="Cross icon" />
						</Button>
					}
				</Input>

				<Button className={styles.button}>
					ПОИСК
				</Button>
			</form>
		</div>
	)
}
