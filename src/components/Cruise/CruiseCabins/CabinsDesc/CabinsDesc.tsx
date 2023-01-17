import { FC, useState } from 'react'

import { Heading } from '../../../../components-ui'

import { ICabins } from '../../../../model/interfaces'

import { DescLeft } from './DescLeft/DescLeft'
import { DescRight } from './DescRight/DescRight'

import styles from './cabins-desc.module.scss'

interface IProps {
	cabins: ICabins[]
}

export const CabinsDesc: FC<IProps> = ({ cabins }) => {
	const [activeId, setActive] = useState<number | null>(null)
	const [checkedId, setCheckedId] = useState<number | null>(null)

	const handleToggle = (idx: number) => {
		if (activeId === idx) {
			setActive(null)
		} else {
			setActive(idx)
		}
	}

	const handleChecked = (idx: number) => {
		if (checkedId === idx) {
			setCheckedId(null)
		} else {
			setCheckedId(idx)
		}
	}

	return (
		<>
			{cabins.map(cabin =>
				<div key={cabin.id} className={styles.component}>
					<Heading as="h5" className={styles.title}>
						{cabin.title}
					</Heading>
					<div className={styles.container}>
						<div className={styles.left}>
							<DescLeft id={cabin.id} images={cabin.images} handleToggle={handleToggle} />
						</div>
						<div className={styles.right}>
							<DescRight
								id={cabin.id}
								cabinsDesc={cabin.desc}
								activeId={activeId}
								checkedId={checkedId}
								handleChecked={handleChecked}
							/>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
