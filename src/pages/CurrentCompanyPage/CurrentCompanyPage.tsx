import {
	HeaderAnchors,
	IntroWithGallery,
	PopularCruises,
	Desc,
	Article,
	HelpfulAdvice,
	HelpfulBlogPosts,
	About,
	Advantages,
} from '../../components/RepeaterBlocks'

import { dataCompanyGallery, dataCompanyHelpfulBlogPosts, dataCompanyDesc } from '../../fakedata'

export const CurrentCompanyPage = () => {
	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery {...dataCompanyGallery} />
			<PopularCruises />
			<Desc {...dataCompanyDesc} />
			{/* <Article articles={dataPortArticles} />
			<HelpfulAdvice {...dataPortHelpfulAdvice} /> */}
			<PopularCruises />
			<HelpfulBlogPosts cards={dataCompanyHelpfulBlogPosts} />
			<About />
			<Advantages />

		</>
	)
}
