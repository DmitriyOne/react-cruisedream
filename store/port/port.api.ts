import { HYDRATE } from 'next-redux-wrapper'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ICurrentPortPage } from '@crdr/interfaces'

export const portApi = createApi({
	reducerPath: 'port/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api-dev.cruisedream.ru/api/v1/',
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath]
		}
	},
	endpoints: (builder) => ({
		getPortById: builder.query<ICurrentPortPage, number>({
			query: (id) => ({
				url: 'cruises/get-by-id',
				method: 'POST',
				body: { id },
			}),
		}),
	}),
})

export const {
	useGetPortByIdQuery,
	util: { getRunningQueriesThunk: getRunningQueriesThunkPort },
} = portApi

export const { getPortById } = portApi.endpoints
