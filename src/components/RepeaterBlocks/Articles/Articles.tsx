import { FC } from 'react'

import { IArticle } from '../../../model/interfaces'
import { Container } from '../../../components'

import { ArticleItem } from './ArticleItem/ArticleItem'

interface IProps {
	articles: IArticle[]
}

export const Articles: FC<IProps> = ({ articles }) => {
	return (
		<Container
			width="full"
			direction="column"
			id="info"
			className="pt-section"
			tag="section"
		>
			{articles.map((article =>
				<ArticleItem key={article.id} {...article} />
			))}
		</Container>
	)
}
