import { Routes, Route } from 'react-router-dom'

import { HeaderProvider, SearchFiltersProvider } from '../../context'
import { CRUISE_ROUTES } from '../../constants'

import {
	HomePage,
	SearchPage,
	SalePage,
	RegionsPage,
	AcrossRussiaPage,
	ShipsPage,
	CompaniesPage,
	BlogPage,
	NotFoundPage
} from '../../pages'

import { Layout } from '../Layout'

export const AppRoutes = () => {
	return (
		<HeaderProvider>
			<SearchFiltersProvider>
				<Routes>
					<Route path={CRUISE_ROUTES.HOME} element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path={CRUISE_ROUTES.SEARCH} element={<SearchPage />} />
						<Route path={CRUISE_ROUTES.SALE} element={<SalePage />} />
						<Route path={CRUISE_ROUTES.REGIONS} element={<RegionsPage />} />
						<Route path={CRUISE_ROUTES.ACROSS_RUSSIA} element={<AcrossRussiaPage />} />
						<Route path={CRUISE_ROUTES.SHIPS} element={<ShipsPage />} />
						<Route path={CRUISE_ROUTES.COMPANIES} element={<CompaniesPage />} />
						<Route path={CRUISE_ROUTES.BLOG} element={<BlogPage />} />
						<Route path={CRUISE_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
					</Route>
				</Routes>
			</SearchFiltersProvider>
		</HeaderProvider>
	)
}
