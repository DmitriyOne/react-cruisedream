import { FC } from 'react'

import { IGoogleApiResult } from '@crdr/interfaces'

import { GoogleApiResults } from '@crdr/components'
import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

interface IProps {
	results: IGoogleApiResult
}

export const GoogleResults: FC<IProps> = ({ results }) => {

	console.log('page data: ', results)

	return (
		<>
			<DynamicHeadTitle pageTitle="Google Search" />
			<DynamicHeadDesc />

			<GoogleApiResults results={results} />
		</>
	)
}

export async function getServerSideProps(context: any) {
	const startIndex = context.query.start || '0'

	const data: IGoogleApiResult = await fetch(
		`${process.env.NEXT_PUBLIC_GOOGLE_SEARCH_URL}&q=${context.query.term}&start=${startIndex}`
	).then((response) => response.json())

	return {
		props: {
			results: data,
		},
	}
}

export default GoogleResults
