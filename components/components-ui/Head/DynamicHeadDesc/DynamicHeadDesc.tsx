import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface IProps {
	pageDescription?: string
}

export const DynamicHeadDesc: FC<IProps> = ({ pageDescription }) => {
	const router = useRouter()	
	
	const getDesc = (): string => {
		let pageDesc = `This is the ${router.pathname} page`
		if (pageDescription) {
			pageDesc = pageDescription
		}

		return pageDesc
	}

	return (
		<Head>
			<meta name="description" content={getDesc()} />
		</Head>
	)
}
