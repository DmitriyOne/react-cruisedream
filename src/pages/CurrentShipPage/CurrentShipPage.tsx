/* eslint-disable max-len */
import classNames from 'classnames'

import { dataRegionPopularBlogPosts, dataRegionsHelpfulAdvice, dataShipArticlePhoto1, dataShipArticlePhoto2, dataShipArticleVideo, dataShipDesc, dataShipGallery } from '../../fakedata'

import { About, Advantages, Desc, HeaderAnchors, HelpfulAdvice, IntroWithGallery, PopularBlogPosts, PopularCountries, PopularCruises } from '../../components/RepeaterBlocks'
import { Ship, ShipOptions } from '../../components/Ship'
import { Article } from '../../components/RepeaterBlocks/Article'

import styles from './current-ship-page.module.scss'

export const CurrentShipPage = () => {

	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataShipGallery} />
			<Ship
				componentClass={styles.ship}
				isShowDescText={false}
				isShowLinks={false}
				shipData="full"
			/>
			<Desc
				componentClass={classNames(styles.desc, 'pt-section', 'pb-section')}
				{...dataShipDesc}
			/>
			<PopularCountries />
			<Article {...dataShipArticlePhoto1} />
			<Article {...dataShipArticlePhoto2} />
			<ShipOptions />
			<Article {...dataShipArticleVideo} />
			<HelpfulAdvice
				isSlider={false}
				{...dataRegionsHelpfulAdvice}
			/>
			<PopularCruises
				componentClass="pt-section pb-section"
				isBottomLink
			/>
			<PopularBlogPosts cards={dataRegionPopularBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}
