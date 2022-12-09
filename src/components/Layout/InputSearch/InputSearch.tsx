import { Button } from '../../Button'
import { Input } from '../../Input'

import styles from './input-search.module.scss'

export const InputSearch = () => {
	return (
		<div className={styles.component}>
			<form className={styles.form}>
				<Input
					componentClassName={styles.inputWrapper}
					inputClassName={styles.input}
					labelClassName={styles.label}
					type="search"
					labelText="Поиск по сайту"
					labelPosition="top"
				/>
				<Button className={styles.button}>
					ПОИСК
				</Button>
			</form>
		</div>
	)
}
