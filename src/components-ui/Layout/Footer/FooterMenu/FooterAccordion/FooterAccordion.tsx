import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './footer-accordion.module.scss'

interface IItem {
	href: string;
	text: string;
}

interface IProps {
	item: IItem
	isOpen?: boolean;
}

export const FooterAccordion: FC<IProps> = ({
	item,
	isOpen
}) => {
	const componentClassName = classNames(styles.component, {
		[styles.active]: isOpen
	})

	return (
		<li className={componentClassName}>
			<Link
				to={item.href}
				className={styles.link}
			>
				{item.text}
			</Link>
		</li>
	)
}
