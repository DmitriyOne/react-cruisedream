import { BlogPage } from 'screens'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

const Blog = () => {
	return (
		<>
			<DynamicHeadTitle pageTitle="Блог" />
			<DynamicHeadDesc pageDescription="Это страница блога о круизах." />

			<BlogPage />
		</>
	)
}

export default Blog
