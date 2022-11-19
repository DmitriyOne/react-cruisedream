import { Button, Container } from '../../../components'

import styles from './about.module.scss'

export const About = () => {
	return (
		<Container width="full" className={styles.component}>
			<div className={styles.bg} />
			<Container
				direction="column"
				align="start"
			>
				<div className={styles.content}>
					<h4 className={styles.title}>
						ТЕКСТ О ПРЕИМУЩЕСТВАХ КРУИЗНОЙ КОМПАНИИ
					</h4>
					<p className={styles.description}>
						В первоначальном значении <br />
						Круиз - морское путешествие
					</p>
					<Button className={styles.button}>
						ПОДРОБНЕЕ
					</Button>
				</div>
			</Container>
		</Container>
	)
}
