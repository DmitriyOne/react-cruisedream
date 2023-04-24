import { dataPopularCruisePosts } from '@crdr/fakedata'

import { PopularPost } from '../PopularPost'

export const PopularCruisePosts = () => {

	return (
		<PopularPost
			id="popular-cruise-posts"
			componentClass="pt-section pb-section"
			title="Популярные круизы"
			columns="4"
			cardType="popular_cruise"
			data={dataPopularCruisePosts}
			bottomBtnHref="#"
			bottomBtnText="все круизы"
			isArrowTopStatic
			isArrowGray
			isArrowIndentEdge
			isSwiperIndentMobile
		/>
	)
}
