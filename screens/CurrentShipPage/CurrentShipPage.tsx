/* eslint-disable max-len */
import classNames from 'classnames'

import { dataArticlePhoto1, dataArticlePhoto2, dataArticleVideo, dataCompanyGalleryIntro, dataRegionsHelpfulAdvice, dataShipDescCurrentPage } from '@crdr/fakedata'

import { About, Advantages, Article, DescCurrentPage, HeaderAnchors, HelpfulAdvice, IntroWithGallery, PopularBlogPosts, PopularCountryPosts, PopularCruisePosts, Ship, ShipCabins, ShipOptions } from '@crdr/components'

import styles from './current-ship-page.module.scss'

export const CurrentShipPage = () => {

	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCompanyGalleryIntro} />
			<Ship
				componentClass={styles.ship}
				isShowDescText={false}
				isShowLinks={false}
				shipData="full"
			/>
			<DescCurrentPage
				componentClass={classNames(styles.desc, 'pt-section', 'pb-section')}
				{...dataShipDescCurrentPage}
			/>
			<PopularCountryPosts />
			<Article {...dataArticlePhoto1} />
			<Article {...dataArticlePhoto2} />
			<ShipOptions />
			<Article {...dataArticleVideo} />
			<HelpfulAdvice
				isSlider={false}
				{...dataRegionsHelpfulAdvice}
			/>
			<ShipCabins />
			<PopularCruisePosts />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}
