import { FC } from 'react'

import { ICabinsImages } from '../../../../../model/interfaces'

import styles from './desc-left.module.scss'

interface IProps {
	id: number
	images: ICabinsImages
}

export const DescLeft: FC<IProps> = ({ id, images }) => {

	return (
		<>
			<div className={styles.component}>
				<img src={images.src} alt={images.alt} />
			</div>
		</>
	)
}
