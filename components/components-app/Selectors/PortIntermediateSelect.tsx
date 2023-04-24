import { FC, useContext } from 'react'
import classNames from 'classnames'

import { SearchSelectorsContext } from '@crdr/context'
import { allPortIntermediateOptions,groupedPortIntermediate } from '@crdr/fakedata'

import { MySelect } from '@crdr/plugins'

import { ISelectorsProps } from './RegionSelect'

export const PortIntermediateSelect: FC<ISelectorsProps> = ({ classComponent, classPrefix, labelClass }) => {
	const { port } = useContext(SearchSelectorsContext)

	return (
		<>
			<label className={labelClass}>
				Порт захода
			</label>
			<MySelect
				selectAllOption={allPortIntermediateOptions}
				selectedOption={port.intermediate}
				setSelected={port.onChangePortIntermediate}
				optionsGroup={groupedPortIntermediate}
				classComponent={classComponent}
				classPrefix={classNames(classPrefix, 'select-default')}
				placeholder="Сделайте свой выбор"
			/>
		</>
	)
}
