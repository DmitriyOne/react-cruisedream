import { FC } from 'react'
import classNames from 'classnames'
import { SubmitHandler, useForm } from 'react-hook-form'

import { VALIDATION } from '@crdr/constants'

import { IForm } from '@crdr/interfaces'

import { Button, CheckboxPersonalData, Input, Textarea } from '@crdr/ui'

import styles from '../user-request-modal.module.scss'

interface IProps {
	onClosed?: () => void;
}

export const RequestModalForm: FC<IProps> = ({ onClosed }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IForm> = (data) => {
		console.log(data)
		reset()
		onClosed()
	}

	const formRowClass = classNames(styles.formRow, {
		[styles.error]: errors,
	})
	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className={formRowClass}>
				<Input
					id="name"
					name="name"
					width="half"
					labelText="Имя*"
					labelPosition="top"
					componentClassName={styles.inputWrapper}
					labelClassName={styles.label}
					inputClassName={styles.input}
					placeholder="Андрей"
					errors={errors}
					{...register('name', VALIDATION.name)}
				/>
				<Input
					id="surname"
					name="surname"
					width="half"
					labelText="Фамилия"
					labelPosition="top"
					componentClassName={styles.inputWrapper}
					labelClassName={styles.label}
					inputClassName={styles.input}
					placeholder="Иванов"
				/>
			</div>
			<div className={formRowClass}>
				<Input
					id="phone"
					name="phone"
					type="number"
					labelText="Телефон*"
					labelPosition="top"
					labelClassName={styles.label}
					inputClassName={styles.input}
					placeholder="+7 (777) 453 23 56"
					errors={errors}
					{...register('phone', VALIDATION.phone)}
				/>
			</div>
			<div className={formRowClass}>
				<Input
					id="email"
					name="email"
					type="email"
					labelText="Почта*"
					labelPosition="top"
					labelClassName={styles.label}
					inputClassName={styles.input}
					placeholder="ph@Gmail.com"
					errors={errors}
					{...register('email', VALIDATION.email)}
				/>
			</div>
			<Textarea
				id="comment"
				name="comment"
				labelClassName={styles.label}
				labelPosition="top"
				labelText="Комментарий"
				textareaClassName={styles.textarea}
				placeholder="Перезвоните на мой номер"
				rows={8}
			/>
			<CheckboxPersonalData
				name="personal-data"
				labelText="Согласие на обработку персональных данных"
				labelClass={styles.labelCheckbox}
				errors={errors}
				{...register('personalData', VALIDATION.personalData)}
			/>
			<Button className={styles.button}>
				ОТПРАВИТЬ
			</Button>
		</form>
	)
}
