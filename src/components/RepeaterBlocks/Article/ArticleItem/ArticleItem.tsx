/* eslint-disable max-len */
import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IArticle } from '../../../../model/interfaces'
import { Heading } from '../../../Headings'
import { IFrame } from '../../../IFrame'

import styles from './article-item.module.scss'

export const ArticleItem: FC<IArticle> = ({ ...article }) => {

	const componentClassName = classNames(styles.component, {
		[styles.photoLeft]: article.position === 'left',
		[styles.photoRight]: article.position === 'right',
	})
	const leftClassName = classNames(styles.left,
		article.video ? styles.large : styles.small
	)
	return (
		<div className={componentClassName}>
			<div className={leftClassName}>
				{article.video
					?
					<IFrame src={article.video!} />
					:
					<img src={article.image!.src} alt={article.image!.alt} />
				}
			</div>
			<div className={styles.right}>
				<Heading as="h4" className={styles.title}>
					{article.title}
				</Heading>
				<p className={styles.description}>
					{article.description}
				</p>
				{article.href &&
					<Link className={styles.button} to={article.href!}>
						ВСЕ КРУИЗЫ
					</Link>
				}
			</div>
		</div>
	)
}