import { FC } from 'react'
import classNames from 'classnames'

import { IArticle } from '../../../model/interfaces'
import { Container } from '../../../components-ui'

import { ArticleItem } from './ArticleItem/ArticleItem'

import styles from './article.module.scss'

interface IProps extends IArticle {
	className?: string
}

export const Article: FC<IProps> = ({ className, ...article }) => {
	return (
		<Container
			width="full"
			direction="column"
			id="info"
			className={classNames(className, styles.component, 'pt-section')}
			tag="section"
		>
			<ArticleItem {...article} />
		</Container>
	)
}
