import { FC, useContext } from 'react'
import classNames from 'classnames'

import { SearchSelectorsContext } from '@crdr/context'
import { allCruiseTypeOptions, groupedTypeCruise } from '@crdr/fakedata'

import { MySelect } from '@crdr/plugins'

import { ISelectorsProps } from './RegionSelect'

export const TypeCruiseSelect: FC<ISelectorsProps> = ({ classComponent, classPrefix, labelClass }) => {
	const { typeCruise, onChangeTypeCruise } = useContext(SearchSelectorsContext)

	return (
		<>
			<label className={labelClass}>
				Тип круиза
			</label>
			<MySelect
				classComponent={classComponent}
				selectAllOption={allCruiseTypeOptions}
				selectedOption={typeCruise}
				setSelected={onChangeTypeCruise}
				optionsGroup={groupedTypeCruise}
				classPrefix={classNames(classPrefix, 'select-default')}
				placeholder="Сделайте свой выбор"
			/>
		</>
	)
}
