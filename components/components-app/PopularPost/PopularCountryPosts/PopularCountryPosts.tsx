import { dataPopularCountryPosts } from '@crdr/fakedata'

import { PopularPost } from '../PopularPost'

export const PopularCountryPosts = () => {

	return (
		<PopularPost
			id="popular-country-posts"
			componentClass="pt-section pb-section"
			title="Популярные СТРАНЫ"
			columns="3"
			cardType="blackout"
			data={dataPopularCountryPosts}
			bottomBtnHref="#"
			bottomBtnText="все страны"
		/>
	)
}
