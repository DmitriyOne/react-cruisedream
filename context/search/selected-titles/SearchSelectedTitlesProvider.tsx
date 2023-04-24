/* eslint-disable max-len */
'use client'
import { FC, ReactNode, useContext, useEffect, useState } from 'react'

import { groupedCompany, groupedLiners, groupedPortEnd, groupedPortIntermediate, groupedPortStart, groupedRegion, groupedTypeCruise } from '@crdr/fakedata'

import { ISelect } from '@crdr/interfaces'

import { SearchSelectorsContext } from '../search-selectors'

import { SearchSelectedTitlesContext } from './SearchSelectedTitlesContext'

interface IProps {
	children: ReactNode
}

export const SearchSelectedTitlesProvider: FC<IProps> = ({ children }) => {
	const [regionTitle, setRegionTitle] = useState('')
	const [companyTitle, setCompanyTitle] = useState('')
	const [portStartTitle, setPortStartTitle] = useState('')
	const [portIntermediateTitle, setPortIntermediateTitle] = useState('')
	const [portEndTitle, setPortEndTitle] = useState('')
	const [linerTitle, setLinerTitle] = useState('')
	const [typeCruiseTitle, setTypeCruiseTitle] = useState('')

	const [allRegions, setAllRegions] = useState<ISelect[]>([])
	const [allCompany, setAllCompany] = useState<ISelect[]>([])
	const [allPortStart, setAllPortStart] = useState<ISelect[]>([])
	const [allPortIntermediate, setAllPortIntermediate] = useState<ISelect[]>([])
	const [allPortEnd, setAllPortEnd] = useState<ISelect[]>([])
	const [allLiner, setAllLiner] = useState<ISelect[]>([])
	const [allTypeCruise, setAllTypeCruise] = useState<ISelect[]>([])

	const { region, company, port, liner, typeCruise } = useContext(SearchSelectorsContext)

	const getOptions = (data: any[]) => data.map(item => item.options).flat()

	useEffect(() => {
		const onlyRegion = getOptions(groupedRegion)
		setAllRegions(onlyRegion)
		const onlyCompany = getOptions(groupedCompany)
		setAllCompany(onlyCompany)
		const onlyPortStart = getOptions(groupedPortStart)
		setAllPortStart(onlyPortStart)
		const onlyPortIntermediate = getOptions(groupedPortIntermediate)
		setAllPortIntermediate(onlyPortIntermediate)
		const onlyPortEnd = getOptions(groupedPortEnd)
		setAllPortEnd(onlyPortEnd)
		const onlyLiner = getOptions(groupedLiners)
		setAllLiner(onlyLiner)
		const onlyTypeCruise = getOptions(groupedTypeCruise)
		setAllTypeCruise(onlyTypeCruise)

		setRegionTitle(
			region.length === allRegions.length
				? 'Все регионы'
				: region.map(item => item.label).join(', ')
		)
		setCompanyTitle(
			company.length === allCompany.length
				? 'Все компании'
				: company.map(item => item.label).join(', ')
		)
		setPortStartTitle(
			port.start.length === allPortStart.length
				? 'Все порты отправления'
				: port.start.map(item => item.label).join(', ')
		)
		setPortIntermediateTitle(
			port.intermediate.length === allPortIntermediate.length
				? 'Все порты захода'
				: port.intermediate.map(item => item.label).join(', ')
		)
		setPortEndTitle(
			port.end.length === allPortEnd.length
				? 'Все порты прибытия'
				: port.end.map(item => item.label).join(', ')
		)
		setLinerTitle(
			liner.length === allLiner.length
				? 'Все круизные лайнеры'
				: liner.map(item => item.label).join(', ')
		)
		setTypeCruiseTitle(
			typeCruise.length === allTypeCruise.length
				? 'Все типы круизов'
				: typeCruise.map(item => item.label).join(', ')
		)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [region, company, port, liner, typeCruise])

	const value = {
		regionTitle,
		companyTitle,
		portStartTitle,
		portIntermediateTitle,
		portEndTitle,
		linerTitle,
		typeCruiseTitle,
	}

	return (
		<SearchSelectedTitlesContext.Provider value={value}>
			{children}
		</SearchSelectedTitlesContext.Provider>
	)
}
