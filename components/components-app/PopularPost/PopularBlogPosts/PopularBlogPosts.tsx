import { dataPopularBlogPosts } from '@crdr/fakedata'

import { PopularPost } from '../PopularPost'

export const PopularBlogPosts = () => {

	return (
		<PopularPost
			id="popular-blog-posts"
			componentClass="pb-section"
			title="Популярные посты из блога"
			columns="3"
			cardType="blackout"
			cardBodySize="large"
			cardContentPosition="center"
			data={dataPopularBlogPosts}
			bottomBtnHref="#"
			bottomBtnText="все статьи"
		/>
	)
}
