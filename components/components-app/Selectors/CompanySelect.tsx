import { FC, memo, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { CRUISE_ROUTES } from '@crdr/constants'
import { SearchSelectorsContext } from '@crdr/context'
import { allCompanyOptions, groupedCompany } from '@crdr/fakedata'

import { MySelect } from '@crdr/plugins'

import { ISelectorsProps } from './RegionSelect'

export const CompanySelect: FC<ISelectorsProps> = memo(({ classComponent, classPrefix }) => {
	const { company, onChangeCompany } = useContext(SearchSelectorsContext)
	const [isSelectedAll, setIsSelectedAll] = useState(false)
	const router = useRouter()

	useEffect(() => {
		if (company.length !== 0) {
			setIsSelectedAll(false)
		} else if (company.length === 0 && router.pathname === CRUISE_ROUTES.SEARCH || router.pathname === CRUISE_ROUTES.LANDING) {
			setIsSelectedAll(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<MySelect
			selectAllOption={allCompanyOptions}
			selectedOption={company}
			setSelected={onChangeCompany}
			optionsGroup={groupedCompany}
			classComponent={classComponent}
			classPrefix={classNames(classPrefix, 'select-default')}
			placeholder="Круизная компания"
			isDefaultSelectAll={isSelectedAll}
			isRequired={true}
		/>
	)
})

CompanySelect.displayName = 'CompanySelect'
