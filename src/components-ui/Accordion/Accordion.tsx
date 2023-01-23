import { Link } from 'react-router-dom'
import { useRef, FC } from 'react'
import classNames from 'classnames'

import arrowIcon from './icons/arrow-down.svg'

import styles from './accordion.module.scss'

interface ILink {
	text: string
}

interface IAccordion {
	id: number
	title: string
	text?: string
	links?: ILink[]
	href?: string
}

interface IProps {
	handleToggle: (id: number) => void
	activeId: number | null
	accordion: IAccordion
	componentClass?: string
	titleClass?: string
	arrowClass?: string
	bodyClass?: string
	textClass?: string
	linkClass?: string
}

export const Accordion: FC<IProps> = ({
	handleToggle, activeId, accordion, componentClass, arrowClass, titleClass, bodyClass, textClass, linkClass
}) => {
	const ref = useRef<HTMLDivElement>(null)

	const componentClassName = classNames(componentClass, styles.component)
	const titleClassName = classNames(titleClass, styles.title)
	const arrowClassName = classNames(arrowClass, styles.arrow, {
		[styles.active]: activeId === accordion.id
	})
	const bodyClassName = classNames(bodyClass, styles.body, {
		[styles.active]: activeId === accordion.id
	})
	const textClassName = classNames(textClass, styles.text)
	const linkClassName = classNames(linkClass, styles.link)

	return (
		<div className={componentClassName}>
			<h4
				className={titleClassName}
				onClick={() => handleToggle(accordion.id)}
			>
				{accordion.title}
				<span className={arrowClassName}>
					<img src={arrowIcon} alt="Arrow icon" />
				</span>
			</h4>
			<div
				ref={ref}
				className={bodyClassName}
				style={
					activeId === accordion.id
						? { height: ref.current!.scrollHeight }
						: { height: '0px' }
				}
			>
				{accordion.text &&
					<p className={textClassName}>
						{accordion.text}
					</p>
				}
				{accordion.href
					?
					<>
						{accordion.links!.map((link, idx) =>
							<Link
								key={idx}
								to={`${accordion.href}/${accordion.id}`}
								className={linkClassName}
							>
								{link.text}
							</Link>
						)}
					</>
					:
					<></>
				}
			</div>
		</div>
	)
}
