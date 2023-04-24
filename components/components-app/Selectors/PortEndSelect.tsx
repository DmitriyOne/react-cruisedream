import { FC, useContext } from 'react'
import classNames from 'classnames'

import { SearchSelectorsContext } from '@crdr/context'
import { allPortEndOptions, groupedPortEnd } from '@crdr/fakedata'

import { MySelect } from '@crdr/plugins'

import { ISelectorsProps } from './RegionSelect'

export const PortEndSelect: FC<ISelectorsProps> = ({ classComponent, classPrefix, labelClass }) => {
	const { port } = useContext(SearchSelectorsContext)

	return (
		<>
			<label className={labelClass}>
				Порт прибытия
			</label>
			<MySelect
				selectAllOption={allPortEndOptions}
				selectedOption={port.end}
				setSelected={port.onChangePortEnd}
				optionsGroup={groupedPortEnd}
				classComponent={classComponent}
				classPrefix={classNames(classPrefix, 'select-default')}
				placeholder="Сделайте свой выбор"
			/>
		</>
	)
}
