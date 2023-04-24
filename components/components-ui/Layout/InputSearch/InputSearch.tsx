import { FormEvent, useContext } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { CRUISE_ROUTES } from '@crdr/constants'
import { HeaderContext } from '@crdr/context'
import { useInput } from '@crdr/hooks'

import { Button, Input, MyImage } from '@crdr/ui'

import crossIcon from './icons/cross.svg'
import searchIcon from './icons/search.svg'

import styles from './input-search.module.scss'

export const InputSearch = () => {
	const router = useRouter()
	const { isOpenSearch, onCloseSearch } = useContext(HeaderContext)
	const input = useInput('')

	const componentClass = classNames(styles.component, {
		[styles.show]: isOpenSearch,
	})

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()

		const term = input.value
		if (!term) return

		router.push(`${CRUISE_ROUTES.GOOGLE_RESULTS}?term=${term}`)
		onCloseSearch()
	}

	return (
		<div className={componentClass}>
			<form className={styles.form} onSubmit={onSubmit}>
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
						<MyImage
							src={searchIcon}
							alt="Search Icon"
						/>
					</span>
					{input.value.length >= 1 &&
						<span className={styles.reset} onClick={input.reset}>
							<MyImage
								src={crossIcon}
								alt="Cross icon"
							/>
						</span>
					}
				</Input>

				<Button type="submit" className={styles.button}>
					ПОИСК
				</Button>
			</form>
		</div>
	)
}
