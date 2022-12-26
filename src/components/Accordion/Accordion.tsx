import { useRef, FC } from 'react'
import classNames from 'classnames'

import arrowIcon from './icons/arrow-down.svg'

import styles from './accordion.module.scss'

interface IFaq {
	id: number
	title: string
	text: string
}

interface IProps {
	handleToggle: (id: number) => void
	activeId: number | null
	faq: IFaq
	componentClass?: string
	titleClass?: string
	arrowClass?: string
	bodyClass?: string
	textClass?: string
}

export const Accordion: FC<IProps> = ({
	handleToggle, activeId, faq, componentClass, arrowClass, titleClass, bodyClass, textClass
}) => {
	const ref = useRef<HTMLDivElement>(null)

	const componentClassName = classNames(componentClass, styles.component)
	const titleClassName = classNames(titleClass, styles.title)
	const arrowClassName = classNames(arrowClass, styles.arrow, {
		[styles.active]: activeId === faq.id
	})
	const bodyClassName = classNames(bodyClass, styles.body, {
		[styles.active]: activeId === faq.id
	})
	const textClassName = classNames(textClass, styles.text)

	return (
		<div className={componentClassName}>
			<h4
				className={titleClassName}
				onClick={() => handleToggle(faq.id)}
			>
				{faq.title}
				<span className={arrowClassName}>
					<img src={arrowIcon} alt="Arrow icon" />
				</span>
			</h4>
			<div
				ref={ref}
				className={bodyClassName}
				style={
					activeId === faq.id
						? { height: ref.current!.scrollHeight }
						: { height: '0px' }
				}
			>
				<p className={textClassName}>
					{faq.text}
				</p>
			</div>
		</div>
	)
}
