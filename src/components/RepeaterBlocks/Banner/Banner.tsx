import { Button, Container } from '../../../components'

import bannerImage from './images/banner-1.jpeg'

import styles from './banner.module.scss'

export const Banner = () => {
	return (
		<Container width="full" className={styles.component}>
			<div className={styles.bg}>
				<img
					className={styles.image}
					src={bannerImage}
					alt="blue sky"
				/>
			</div>
			<div className={styles.container}>
				<span className={styles.text}>
					новости и лучшие предложения
				</span>
				<h4 className={styles.title}>
					ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ*
				</h4>
				<form className={styles.form}>
					<div className={styles.inputWrapper}>
						<input
							className={styles.input}
							type="text"
							name="subscribe"
							id="subscribe"
						/>
					</div>
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
