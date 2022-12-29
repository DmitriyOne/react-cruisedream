/* eslint-disable max-len */
import classNames from 'classnames'
import { FC } from 'react'
import { IArticle } from '../../../../model/interfaces'
import { Heading } from '../../../Headings'
import { IFrame } from '../../../IFrame'

import styles from './article-item.module.scss'

export const ArticleItem: FC<IArticle> = ({ ...article }) => {

	const leftClassName = classNames(styles.left,
		article.isVideo ? styles.large : styles.small
	)
	const descriptionClassName = classNames(styles.description,
		article.isVideo ? styles.large : styles.small
	)
	return (
		<div className={styles.component}>
			<div className={leftClassName}>
				{article.isVideo
					?
					<IFrame src={article.videoSrc!} />
					:
					<img src={article.image!.src} alt={article.image!.alt} />
				}
			</div>
			<div className={styles.right}>
				<Heading as="h4" className={styles.title}>
					{article.title}
				</Heading>
				<p className={descriptionClassName}>
					{article.description}
				</p>
			</div>
		</div>
	)
}
