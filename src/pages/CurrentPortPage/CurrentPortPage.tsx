/* eslint-disable max-len */
import { HeaderAnchors, IntroWithGallery, PopularCruises, Desc, Articles, HelpfulAdvice, HelpfulBlogPosts, About, Advantages } from '../../components/RepeaterBlocks'

import { dataPortArticles, dataPortDesc, dataPortGallery, dataPortHelpfulAdvice, dataPortHelpfulBlogPosts } from '../../fakedata'

export const CurrentPortPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataPortGallery} />
			<PopularCruises />
			<Desc {...dataPortDesc} />
			<Articles articles={dataPortArticles} />
			<HelpfulAdvice {...dataPortHelpfulAdvice} />
			<PopularCruises />
			<HelpfulBlogPosts cards={dataPortHelpfulBlogPosts} />
			<About />
			<Advantages />
		</>
	)
}
