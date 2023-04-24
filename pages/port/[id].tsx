import { CurrentPortPage } from 'screens'

import { getPortById, getRunningQueriesThunkPort, wrapper } from '@crdr/store'

import { DynamicHeadDesc, DynamicHeadTitle } from '@crdr/ui'

export const CurrenPort = () => {

	return (
		<>
			<DynamicHeadTitle />
			<DynamicHeadDesc pageDescription="Это страница выбранного порта" />

			<CurrentPortPage />
		</>
	)
}

export const getServerSideProps = wrapper.getServerSideProps(
	(store) => async (context) => {
		const id = context.params?.id
		const idNumber = Number(id)

		if (typeof idNumber === 'number') {
			store.dispatch(getPortById.initiate(idNumber))
		}

		await Promise.all(store.dispatch(getRunningQueriesThunkPort()))

		return {
			props: {},
		}
	}
)

export default CurrenPort
