import { About, Advantages, BannerDefault, BannerWithSlider, SwiperRegionCards } from '@crdr/components'

import { Partners, Sale, Search } from './sections'

export const HomePage = () => {

	return (
		<>
			<BannerWithSlider />
			<Search />
			<Sale />
			<BannerDefault />
			<SwiperRegionCards isMobilePaddingNull position="grid" cardPositionContent="center" />
			<Partners />
			<About />
			<Advantages />
		</>
	)
}
