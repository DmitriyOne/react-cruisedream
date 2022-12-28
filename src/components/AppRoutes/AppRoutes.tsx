import { Routes, Route } from 'react-router-dom'

import { HeaderProvider, PaginateProvider, SearchFiltersProvider } from '../../context'
import { CRUISE_ROUTES } from '../../constants'

import {
	HomePage,
	SearchPage,
	CruisePage,
	SalePage,
	AllRegionsPage,
	AcrossRussiaPage,
	ShipsPage,
	AllCompanyPage,
	BlogPage,
	NotFoundPage
} from '../../pages'

import { Layout } from '../Layout'

export const AppRoutes = () => {
	return (
		<HeaderProvider>
			<PaginateProvider>
				<SearchFiltersProvider>
					<Routes>
						<Route path={CRUISE_ROUTES.HOME} element={<Layout />}>
							<Route index element={<HomePage />} />
							<Route path={CRUISE_ROUTES.SEARCH} element={<SearchPage />} />
							<Route path={CRUISE_ROUTES.CRUISE} element={<CruisePage />} />
							<Route path={CRUISE_ROUTES.SALE} element={<SalePage />} />
							<Route path={CRUISE_ROUTES.REGIONS} element={<AllRegionsPage />} />
							<Route path={CRUISE_ROUTES.ACROSS_RUSSIA} element={<AcrossRussiaPage />} />
							<Route path={CRUISE_ROUTES.SHIPS} element={<ShipsPage />} />
							<Route path={CRUISE_ROUTES.COMPANIES} element={<AllCompanyPage />} />
							<Route path={CRUISE_ROUTES.BLOG} element={<BlogPage />} />
							<Route path={CRUISE_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
						</Route>
					</Routes>
				</SearchFiltersProvider>
			</PaginateProvider>
		</HeaderProvider>
	)
}
