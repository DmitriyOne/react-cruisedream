import { FC } from 'react'

import { IArticle } from '../../../model/interfaces'
import { Container } from '../..'

import { ArticleItem } from './ArticleItem/ArticleItem'

export const Article: FC<IArticle> = ({ ...article }) => {
	return (
		<Container
			width="full"
			direction="column"
			id="info"
			className="pt-section"
			tag="section"
		>
			<ArticleItem {...article} />
		</Container>
	)
}
