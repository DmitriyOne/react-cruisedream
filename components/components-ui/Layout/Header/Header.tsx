import { useContext } from 'react'
import classNames from 'classnames'

import { HeaderContext } from '@crdr/context'
import { useScrollUpMobile,useWindowSize } from '@crdr/hooks'

import { Container } from '@crdr/ui'

import { Information } from '../Information'
import { InputSearch } from '../InputSearch'
import { Logo } from '../Logo'

import { Burger } from './Burger'
import { Contacts } from './Contacts'
import { Navbar } from './Navbar'

import styles from './header.module.scss'

export const Header = () => {
	const { isTablet, isDesktop } = useWindowSize()
	const { isFixed, isShowFixed, ref } = useScrollUpMobile()
	const { isOpen: burgerIsOpen, onToggle: burgerToggle} = useContext(HeaderContext)

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
						<Logo
							className={styles.logo}
							navIsClose={burgerIsOpen ? burgerToggle : null}
						/>
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
