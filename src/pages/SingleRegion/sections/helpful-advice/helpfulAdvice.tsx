/* eslint-disable max-len */
import { CardImageSlider, Container, Heading } from '../../../../components'
import { dataRegionsHelpfulAdvice } from '../../../../fakedata'
import styles from './helpful-advice.module.scss'

export const HelpfulAdvice = () => {
	return (
		<Container
			width="full"
			direction="column"
			className="pt-section"
			tag="section"
		>
			<Container direction="column" className={styles.content}>
				<Heading as="h2" className="title-secondary">
					ПОЛЕЗНЫЕ СОВЕТЫ
				</Heading>
				<p className={styles.subtitle}>
					Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова				</p>
			</Container>

			<CardImageSlider images={dataRegionsHelpfulAdvice} />
		</Container>
	)
}
