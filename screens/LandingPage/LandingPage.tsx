/* eslint-disable max-len */
import { useContext } from 'react'

import { SearchSelectorsContext } from '@crdr/context'

import { BannerDefault, Filters, StickySearchPage } from '@crdr/components'

import bgImg from '@crdr/image/banners/with-slider/intro-1.jpeg'

import { Main } from './sections'

const subtitle = 'Круизы по Карибскому морю на лайнерах Royal Caribbean – это не забываемое приключение для всей семьи. Каждый найдет для себя развлечения на любой вкус.'

export const LandingPage = () => {
	const { isSelectedOptions } = useContext(SearchSelectorsContext)

	return (
		<>
			<Filters
				backgroundColor="transparent"
				backgroundImage={bgImg}
				containerBg="#ffffff55"
				subtitle={subtitle}
			/>
			{isSelectedOptions && <StickySearchPage />}
			<Main />
			<BannerDefault />
		</>
	)
}
