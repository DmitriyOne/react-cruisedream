import { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import styles from './my-image.module.scss'

interface IProps {
	componentClass?: string
	imageClass?: string
	src: string
	alt: string
	onClick?: () => void
	isPriority?: boolean
}

export const MyImage: FC<IProps> = ({
	componentClass,
	imageClass,
	src,
	alt,
	onClick,
	isPriority = false,
}) => {

	return (
		<div className={classNames(styles.component, componentClass)}>
			<Image
				className={classNames(styles.image, imageClass)}
				src={src}
				alt={alt}
				onClick={onClick}
				fill
				priority={isPriority}
				sizes="auto"
			/>
		</div>
	)
}
