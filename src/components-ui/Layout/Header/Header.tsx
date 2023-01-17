import { useContext } from 'react'
import classNames from 'classnames'

import { HeaderContext } from '../../../context'
import { useWindowSize, useScrollUpMobile } from '../../../hooks'

import { Logo } from '../Logo'
import { Navbar } from './Navbar'
import { Contacts } from './Contacts'
import { Burger } from './Burger'
import { Information } from '../Information'
import { Container } from '../../../components-ui/Container'

import styles from './header.module.scss'
import { InputSearch } from '../InputSearch'

export const Header = () => {
	const { isTablet, isDesktop } = useWindowSize()
	const { isFixed, isShowFixed, ref } = useScrollUpMobile()
	const { isOpen: burgerIsOpen, onToggle: burgerToggle } = useContext(HeaderContext)

	const componentClass = classNames(styles.component, styles.column)

	return (
		<>
			<header
				className={classNames(
					isTablet ? componentClass : styles.component,
				)}
			>
				<Information />
				<div
					className={styles.header}
					style={isFixed ? { paddingTop: `${ref.current?.offsetHeight}px` } : undefined}
					ref={ref}
				>
					<Container
						direction="row"
						width="containerXl"
						className={classNames(
							styles.headerRow,
							isFixed ? styles.fixed : undefined,
							isShowFixed ? styles.show : undefined
						)}
					>
						{isTablet &&
							<Burger
								burgerToggle={burgerToggle}
								burgerIsOpen={burgerIsOpen}
							/>
						}
						<Logo className={styles.logo} />
						<Navbar
							navbarIsOpen={burgerIsOpen}
							navIsClose={burgerToggle}
						/>
						<Contacts />
					</Container>
				</div>
				{isDesktop && <InputSearch />}
			</header>
		</>
	)
}
