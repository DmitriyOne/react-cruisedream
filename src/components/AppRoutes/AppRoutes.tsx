import { Routes, Route } from 'react-router-dom'

import { CRUISE_ROUTES } from '../../constants'
import { HomePage, AllCruisesPage, CruisePage, NotFoundPage } from '../../pages'

import { Layout } from '../Layout'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={CRUISE_ROUTES.HOME} element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path={CRUISE_ROUTES.ALL_CRUISES} element={<AllCruisesPage />} />
				<Route path={CRUISE_ROUTES.CRUISE} element={<CruisePage />} />
				<Route path={CRUISE_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}
