import { FC, useContext } from 'react'
import classNames from 'classnames'

import { SearchSelectorsContext } from '@crdr/context'
import { allPortStartOptions, groupedPortStart } from '@crdr/fakedata'

import { MySelect } from '@crdr/plugins'

import { ISelectorsProps } from './RegionSelect'

export const PortStartSelect: FC<ISelectorsProps> = ({ classComponent, classPrefix, labelClass }) => {
	const { port } = useContext(SearchSelectorsContext)

	return (
		<>
			<label className={labelClass}>
				Порт отправления
			</label>
			<MySelect
				selectAllOption={allPortStartOptions}
				selectedOption={port.start}
				setSelected={port.onChangePortStart}
				optionsGroup={groupedPortStart}
				classComponent={classComponent}
				classPrefix={classNames(classPrefix, 'select-default')}
				placeholder="Сделайте свой выбор"
			/>
		</>
	)
}
