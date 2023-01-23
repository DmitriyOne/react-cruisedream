import { useContext } from 'react'

import { Filters } from '../../components'
import { Banner } from '../../components/RepeaterBlocks'
import { StickySearchPage } from '../../components/Sticky'
import { Main } from './sections'

import bgImg from '../../components/RepeaterBlocks/IntroHome/images/intro-1.jpeg'

import { SearchFiltersContext } from '../../context'

const subtitle = 'Круизы по Карибскому морю на лайнерах Royal Caribbean – это не забываемое приключение для всей семьи. Каждый найдет для себя развлечения на любой вкус.'

export const LandingPage = () => {
	const { isSelected } = useContext(SearchFiltersContext)

	return (
		<>
			<Filters
				backgroundColor="transparent"
				backgroundImage={bgImg}
				containerBg="#ffffff55"
				subtitle={subtitle}
			/>
			{isSelected && <StickySearchPage />}
			<Main />
			<Banner />
		</>
	)
}
