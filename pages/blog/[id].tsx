import { CurrentBlogPostPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

export const CurrentBlogPost = () => {

	return (
		<>
			<DynamicHeadTitle />
			<DynamicHeadDesc pageDescription="Это страница выбранного поста из блога" />

			<CurrentBlogPostPage />
		</>
	)
}

export default CurrentBlogPost
