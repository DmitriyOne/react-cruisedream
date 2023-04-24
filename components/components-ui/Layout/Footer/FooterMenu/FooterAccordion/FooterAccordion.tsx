import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

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
	isOpen,
}) => {
	const componentClassName = classNames(styles.component, {
		[styles.active]: isOpen,
	})	

	return (
		<li className={componentClassName}>
			<Link
				href={item.href}
				className={styles.link}
			>
				{item.text}
			</Link>
		</li>
	)
}
