/* eslint-disable max-len */
import { HeaderAnchors, IntroWithGallery, PopularCruises, Desc, HelpfulAdvice, About, Advantages, PopularBlogPosts } from '../../components/RepeaterBlocks'
import { Article } from '../../components/RepeaterBlocks/Article/Article'

import { dataPortArticlePhoto1, dataPortArticlePhoto2, dataPortArticlePhoto3, dataPortDesc, dataPortGallery, dataPortHelpfulAdvice, dataPortPopularBlogPosts } from '../../fakedata'

export const CurrentPortPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataPortGallery} />
			<PopularCruises componentClass="pt-section pb-section" isBottomLink />
			<Desc {...dataPortDesc} />
			<Article {...dataPortArticlePhoto1} />
			<Article {...dataPortArticlePhoto2} />
			<Article {...dataPortArticlePhoto3} />
			<HelpfulAdvice {...dataPortHelpfulAdvice} />
			<PopularCruises componentClass="pt-section pb-section" isBottomLink  />
			<PopularBlogPosts cards={dataPortPopularBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}
