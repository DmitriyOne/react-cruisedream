'use client'
import { FC, ReactNode, useContext, useEffect, useState } from 'react'

import { groupedCompany, groupedRegion } from '@crdr/fakedata'

import { ISelect } from '@crdr/interfaces'

import { SearchSelectorsContext } from '../search-selectors'

import { SearchTitleContext } from './SearchTitleContext'

interface IProps {
	children: ReactNode
}

export const SearchTitleProvider: FC<IProps> = ({ children }) => {
	const [regionTitle, setRegionTitle] = useState('')
	const [companyTitle, setCompanyTitle] = useState('')
	const [allRegions, setAllRegions] = useState<ISelect[]>([])
	const [allCompany, setAllCompany] = useState<ISelect[]>([])
	const { region, company } = useContext(SearchSelectorsContext)

	const getOptions = (data: any[]) => data.map(item => item.options).flat()

	useEffect(() => {
		const onlyRegion = getOptions(groupedRegion)
		setAllRegions(onlyRegion)
		const onlyCompany = getOptions(groupedCompany)
		setAllCompany(onlyCompany)

		if (region.length === allRegions.length && company.length === allCompany.length) {
			setRegionTitle('всем регионам')
			setCompanyTitle('со всеми компаниями')
		}
		else {
			setRegionTitle(
				region.length === allRegions.length
					? 'всем регионам'
					: region.map(item => item.label).join(', ')
			)
			setCompanyTitle(
				company.length === allCompany.length
					? 'со всеми компаниями'
					: 'с ' + company.map(item => item.label).join(', ')
			)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [region, company])

	const value = {
		regionTitle,
		companyTitle,
	}
	return (
		<SearchTitleContext.Provider value={value}>
			{children}
		</SearchTitleContext.Provider>
	)
}
