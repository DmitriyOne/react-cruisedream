import { FC, useRef } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { IAccordion } from '@crdr/interfaces'

import { MyImage } from '../MyImage'

import arrowIcon from './icons/arrow-down.svg'

import styles from './accordion.module.scss'

interface IProps {
	// eslint-disable-next-line no-unused-vars
	handleToggle: (id: number) => void
	activeId: number | null
	accordion: IAccordion
	accordionId: number
	componentClass?: string
	titleClass?: string
	arrowClass?: string
	bodyClass?: string
	textClass?: string
	linkClass?: string
}

export const Accordion: FC<IProps> = ({
	handleToggle,
	activeId,
	accordion,
	accordionId,
	componentClass,
	arrowClass,
	titleClass,
	bodyClass,
	textClass,
	linkClass,
}) => {
	const ref = useRef<HTMLDivElement>(null)

	const componentClassName = classNames(componentClass, styles.component)
	const titleClassName = classNames(titleClass, styles.title)
	const arrowClassName = classNames(arrowClass, styles.arrow, {
		[styles.active]: activeId === accordionId,
	})
	const bodyClassName = classNames(bodyClass, styles.body, {
		[styles.active]: activeId === accordionId,
	})
	const textClassName = classNames(textClass, styles.text)
	const linkClassName = classNames(linkClass, styles.link)

	return (
		<div className={componentClassName}>
			<h4
				className={titleClassName}
				onClick={() => handleToggle(accordionId)}
			>
				{accordion.title}
				<span className={arrowClassName}>
					<MyImage
						src={arrowIcon}
						alt="Arrow icon"
					/>
				</span>
			</h4>
			<div
				ref={ref}
				className={bodyClassName}
				style={
					activeId === accordionId
						? { height: ref.current!.scrollHeight }
						: { height: '0px' }
				}
			>
				{accordion.body.map((item, idx) =>
					accordion.href
						?
						<Link
							key={idx}
							href={`${accordion.href}/${accordionId}`}
							className={linkClassName}
						>
							{item.text}
						</Link>
						:
						<p key={idx} className={textClassName}>
							{item.text}
						</p>

				)}
			</div>
		</div>
	)
}
