import { FC, useContext } from 'react'
import classNames from 'classnames'

import { SearchSelectorsContext } from '@crdr/context'
import { allShipsOptions, groupedLiners } from '@crdr/fakedata'

import { MySelect } from '@crdr/plugins'

import { ISelectorsProps } from './RegionSelect'

export const LinerSelect: FC<ISelectorsProps> = ({ classComponent, classPrefix, labelClass }) => {
	const { liner, onChangeLiner } = useContext(SearchSelectorsContext)

	return (
		<>
			<label className={labelClass}>
				Круизный лайнер
			</label>
			<MySelect
				selectAllOption={allShipsOptions}
				selectedOption={liner}
				setSelected={onChangeLiner}
				optionsGroup={groupedLiners}
				classComponent={classComponent}
				classPrefix={classNames(classPrefix, 'select-default')}
				placeholder="Сделайте свой выбор"
			/>
		</>
	)
}
