import { dataPopularPortPosts } from '@crdr/fakedata'

import { PopularPost } from '../PopularPost'

export const PopularPortPosts = () => {

	return (
		<PopularPost
			id="popular-port-posts"
			componentClass="pt-section pb-section"
			title="Популярные порты"
			columns="4"
			cardType="default"
			data={dataPopularPortPosts}
			isArrowTopStatic
			isArrowGray
			isArrowIndentEdge
			isSwiperIndentMobile
		/>
	)
}
