import { useState } from 'react'
import { TestNewSelect } from '../../components'
import { optionPort1 } from '../../fakedata'
import { ISelect } from '../../model/interfaces'
import { Intro, Search, Banner, About, Advantages, Partners, Regions, Sale } from './sections'

export const HomePage = () => {
	const [optionSelected, setOptionSelected] = useState<ISelect[]>(optionPort1)

	const handleChange = (selected: any, event: any) => {
		setOptionSelected(selected)
	}

	return (
		<>
			<Intro />
			<Search />
			<Sale />
			<Banner />
			<Regions />
			<Partners />
			<About />
			<Advantages />
			<div style={{ margin: '100px auto', width: '50%' }}>
				<TestNewSelect
					options={optionPort1}
					selected={optionSelected}
					setSelected={setOptionSelected}
					title={''}
				/>
			</div>
		</>
	)
}
