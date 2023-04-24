import { FC, memo, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import { CRUISE_ROUTES } from '@crdr/constants'
import { SearchSelectorsContext } from '@crdr/context'
import { allRegionOptions, groupedRegion } from '@crdr/fakedata'

import { MySelect } from '@crdr/plugins'

export interface ISelectorsProps {
	classComponent?: string
	classPrefix?: 'select-transparent' | 'select-white'
	labelClass?: string
}

export const RegionSelect: FC<ISelectorsProps> = memo(({ classComponent, classPrefix }) => {
	const { region, onChangeRegion } = useContext(SearchSelectorsContext)
	const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false)
	const router = useRouter()

	useEffect(() => {
		if (region.length !== 0) {
			setIsSelectedAll(false)
		} else if (region.length === 0 && router.pathname === CRUISE_ROUTES.SEARCH || router.pathname === CRUISE_ROUTES.LANDING) {
			setIsSelectedAll(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<MySelect
			selectAllOption={allRegionOptions}
			selectedOption={region}
			setSelected={onChangeRegion}
			optionsGroup={groupedRegion}
			classComponent={classComponent}
			classPrefix={classNames(classPrefix, 'select-default')}
			placeholder="Регион круиза"
			isDefaultSelectAll={isSelectedAll}
			isRequired={true}
		/>
	)
})

RegionSelect.displayName = 'RegionSelect'
