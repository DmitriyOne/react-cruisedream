import { SubmitHandler, useForm } from 'react-hook-form'

import { IForm } from '@crdr/interfaces'

import { Button, Container, Input } from '@crdr/ui'

// import bannerImage from '@crdr/banners/default/banner-1.jpeg'
import styles from './banner-default.module.scss'

export const BannerDefault = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IForm> = (data) => {
		console.log(data)
		reset()
	}

	return (
		<Container width="full" className={styles.component}>
			<div className={styles.container}>
				<span className={styles.text}>
					новости и лучшие предложения
				</span>
				<h4 className={styles.title}>
					ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ*
				</h4>
				<form
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<Input
						id="subscribe"
						componentClassName={styles.inputWrapper}
						inputClassName={styles.input}
						name="subscribe"
						placeholder="Введите ваш e-mail"
						componentPosition="absolute"
						errors={errors}

						{...register('email', {
							required: 'Емайл заполнить обязательно',
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Пожалуйста, введите корректный емайл',
							},
						})}
					/>
					<Button className={styles.button}>
						ПОДПИСАТЬСЯ
					</Button>

				</form>
				<span className={styles.footnote}>
					*подписку возможно отменить в любое время
				</span>
			</div>
		</Container>
	)
}
