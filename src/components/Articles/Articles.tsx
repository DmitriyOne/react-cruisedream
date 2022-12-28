import { FC } from 'react'
import { IArticle } from '../../model/interfaces'
import { Container } from '../Container'
import { ArticleItem } from './ArticleItem/ArticleItem'

import styles from './articles.module.scss'

interface IProps {
	articles: IArticle[]
}

export const Articles: FC<IProps> = ({ articles }) => {
	return (
		<Container
			width="full"
			direction="column"
			id="info"
		>
			{articles.map((article =>
				<ArticleItem key={article.id} {...article} />
			))}
		</Container>
	)
}
