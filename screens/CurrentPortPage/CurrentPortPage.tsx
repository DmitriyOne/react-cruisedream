/* eslint-disable max-len */
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { skipToken } from '@reduxjs/toolkit/dist/query'

import { AlertContext } from '@crdr/context'
import { dataArticlePhoto1, dataArticlePhoto2, dataArticleVideo, dataPortHelpfulAdvice } from '@crdr/fakedata'
import { useGetPortByIdQuery } from '@crdr/store'

import { About, Advantages, Article, DescCurrentPage, HeaderAnchors, HelpfulAdvice, IntroWithGallery, PopularBlogPosts, PopularCruisePosts } from '@crdr/components'

export const CurrentPortPage = () => {
	const router = useRouter()
	const { id } = router.query
	const idToNumber = Number(id)
	const alert = useContext(AlertContext)

	const resultData = useGetPortByIdQuery(typeof idToNumber === 'number'
		? idToNumber
		: skipToken, { skip: router.isFallback }
	)
	const { isLoading, data: port, isError, isSuccess } = resultData

	useEffect(() => {
		if (isError) {
			alert.visible = true
			alert.show!('Произошла неизвестная ошибка при запросе данных', 'error')
			alert.handlerTimer()
		}
		if (isSuccess) {
			alert.visible = true
			alert.show!('Всё в порядке. Данные с api загрузились успешно', 'ready')
			alert.handlerTimer()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isError, isLoading, isSuccess])

	return (
		<>
			<HeaderAnchors />
			<IntroWithGallery
				title={port?.title}
				desc={port?.titleContent}
				images={port?.gallery}
			/>
			<PopularCruisePosts />
			<DescCurrentPage
				title={port?.cityTitle}
				desc={port?.cityContent}
			/>
			<Article {...dataArticlePhoto1} />
			<Article {...dataArticlePhoto2} />
			<Article {...dataArticleVideo} />
			<HelpfulAdvice
				desc={port?.advicesContent}
				images={dataPortHelpfulAdvice.images}
			/>
			<PopularCruisePosts />
			<PopularBlogPosts />
			<About />
			<Advantages />
		</>
	)
}
