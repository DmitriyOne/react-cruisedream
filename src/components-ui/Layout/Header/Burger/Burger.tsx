import { FC } from 'react'
import classNames from 'classnames'

import { Button } from '../../../../components-ui/Button'

import style from './burger.module.scss'
import { useBodyOverflow } from '../../../../hooks'

interface IProps {
	burgerToggle: () => void;
	burgerIsOpen: boolean;
};

export const Burger: FC<IProps> = ({
	burgerToggle,
	burgerIsOpen,
}) => {
	useBodyOverflow(burgerIsOpen)

	const burgerClassName = classNames(style.burger, {
		[style.active]: burgerIsOpen
	})
	return (
		<Button
			onClick={burgerToggle}
			className={style.component}
		>
			<div className={burgerClassName}>
				<span className={style.line} />
				<span className={style.line} />
				<span className={style.line} />
			</div>
		</Button >
	)
}