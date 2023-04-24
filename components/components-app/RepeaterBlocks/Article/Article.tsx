import { FC } from 'react'
import classNames from 'classnames'

import { IArticle } from '@crdr/interfaces'

import { Container } from '@crdr/ui'

import { ArticleItem } from './ArticleItem/ArticleItem'

interface IProps extends IArticle {
	className?: string
}

export const Article: FC<IProps> = ({ className, ...article }) => {
	return (
		<Container
			width="full"
			direction="column"
			id="info"
			className={classNames(className, 'pt-section')}
			tag="section"
		>
			<ArticleItem {...article} />
		</Container>
	)
}
