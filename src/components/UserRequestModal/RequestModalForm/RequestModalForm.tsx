import { useState } from 'react'

import { Button, CheckboxAgree, Input, Textarea } from '../../../components-ui'

import styles from '../user-request-modal.module.scss'

export const RequestModalForm = () => {
	const [agree, setAgree] = useState(false)

	const handlerChecked = () => {
		console.log('click')
		setAgree(prev => !prev)
	}

	console.log('checked: ', agree)


	return (
		<form className={styles.form}>
			<div className={styles.formRow}>
				<Input
					width="half"
					labelText="Имя*"
					labelPosition="top"
					componentClassName={styles.inputWrapper}
					labelClassName={styles.label}
					inputClassName={styles.input}
					placeholder="Андрей"
				/>
				<Input
					width="half"
					labelText="Фамилия"
					labelPosition="top"
					componentClassName={styles.inputWrapper}
					labelClassName={styles.label}
					inputClassName={styles.input}
					placeholder="Иванов"
				/>
			</div>
			<div className={styles.formRow}>
				<Input
					type="tel"
					labelText="Телефон*"
					labelPosition="top"
					labelClassName={styles.label}
					inputClassName={styles.input}
					placeholder="+7 (777) 453 23 56"
				/>
			</div>
			<div className={styles.formRow}>
				<Input
					type="email"
					labelText="Почта*"
					labelPosition="top"
					labelClassName={styles.label}
					inputClassName={styles.input}
					placeholder="ph@Gmail.com"
				/>
			</div>
			<Textarea
				labelClassName={styles.label}
				labelPosition="top"
				labelText="Комментарий"
				textareaClassName={styles.textarea}
				placeholder="Перезвоните на мой номер"
				rows={8}
			/>
			<CheckboxAgree
				width="full"
				componentClassName={styles.checkbox}
				labelText="Согласие на обработку персональных данных"
				labelPosition="right"
				name="checkbox100"
				checked={agree}
				onChange={handlerChecked}
			/>
			<Button className={styles.button}>
				ОТПРАВИТЬ
			</Button>
		</form>
	)
}
