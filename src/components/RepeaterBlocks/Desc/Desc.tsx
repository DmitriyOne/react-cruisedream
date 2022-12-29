/* eslint-disable max-len */
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { Container, Heading } from '../../../components'
import { CRUISE_ROUTES } from '../../../constants'

import styles from './desc.module.scss'

export const Desc = () => {
	return (
		<Container
			width="full"
			className={classNames(styles.component, 'pb-section')}
			tag="section"
		>
			<Container width="containerS" direction="column">
				<Heading
					as="h2"
					className={classNames('title-secondary', styles.title)}
				>
					СРЕДИЗЕМНОЕ МОРЕ
				</Heading>

				<p className={styles.text}>
					Колыбель цивилизаций, яблоко раздора и древнейшие торговые пути — всё это «море посреди земли», чьи волны омывают берега 22 государств, большая часть которых сумела извлечь прямую туристическую выгоду из этого примечательного соседства. Именно на многочисленных побережьях Средиземного моря расположены наиболее известные мировые курорты, на штурм которых ежегодно устремляются миллионы отпускников со всего мира. Страны двух континентов — Африки и Евразии, а также многочисленные острова и архипелаги предоставляют все условия для полноценного пляжного отдыха: пусть и не всегда тёплые, зато достаточно чистые воды, песчаное или галечное побережье с примечательно широкой береговой линией, буйную плодоносящую природу и массу исторических руин в окрестностях. Что особенно приятно — отдых в средиземноморских кущах можно отнести к категории бюджетного: чуть дороже отечественных «югов» и при этом целый спектр развлечений и пока что, увы, преимущественно недостижимый на родине уровень сервиса.
				</p>

				<Link to={CRUISE_ROUTES.SEARCH} className="button">
					ВСЕ КРУИЗЫ
				</Link>
			</Container>
		</Container>
	)
}
