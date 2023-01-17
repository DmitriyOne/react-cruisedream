import { FC } from 'react'

import styles from './iframe.module.scss'

interface IProps {
	src: string
}

export const IFrame: FC<IProps> = ({ src }) => {
	return (
		<div className={styles.component}>
			<iframe
				className={styles.iframe}
				src={src}
				title="YouTube video player"
				frameBorder="0"
				allow=""
				allowFullScreen
			/>
		</div>
	)
}
