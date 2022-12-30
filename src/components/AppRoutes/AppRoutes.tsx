import { Routes, Route } from 'react-router-dom'

import { HeaderProvider, PaginateProvider, SearchFiltersProvider } from '../../context'
import { CRUISE_ROUTES } from '../../constants'

import {
	HomePage,
	SearchPage,
	CurrentCruisePage,
	AllRegionsPage,
	CurrentRegionPage,
	AllCompanyPage,
	CurrentCompanyPage,
	AllShipsPage,
	CurrentShipPage,
	CurrentPortPage,
	AllDiscountsPage,
	AcrossRussiaPage,
	BlogPage,
	NotFoundPage,
	CurrentBlogPostPage,
	AllPortPage,
	AllCountryPage,
	CurrentCountryPage,
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
							<Route path={CRUISE_ROUTES.CURRENT_CRUISE} element={<CurrentCruisePage />} />

							<Route path={CRUISE_ROUTES.REGIONS} element={<AllRegionsPage />} />
							<Route path={CRUISE_ROUTES.CURRENT_REGION} element={<CurrentRegionPage />} />

							<Route path={CRUISE_ROUTES.COUNTRIES} element={<AllCountryPage />} />
							<Route path={CRUISE_ROUTES.CURRENT_COUNTRY} element={<CurrentCountryPage />} />

							<Route path={CRUISE_ROUTES.COMPANIES} element={<AllCompanyPage />} />
							<Route path={CRUISE_ROUTES.CURRENT_COMPANY} element={<CurrentCompanyPage />} />

							<Route path={CRUISE_ROUTES.SHIPS} element={<AllShipsPage />} />
							<Route path={CRUISE_ROUTES.CURRENT_SHIP} element={<CurrentShipPage />} />

							<Route path={CRUISE_ROUTES.PORTS} element={<AllPortPage />} />
							<Route path={CRUISE_ROUTES.CURRENT_PORT} element={<CurrentPortPage />} />

							<Route path={CRUISE_ROUTES.BLOG} element={<BlogPage />} />
							<Route path={CRUISE_ROUTES.CURRENT_BLOG_POST} element={<CurrentBlogPostPage />} />

							<Route path={CRUISE_ROUTES.DISCOUNTS} element={<AllDiscountsPage />} />
							<Route path={CRUISE_ROUTES.ACROSS_RUSSIA} element={<AcrossRussiaPage />} />

							<Route path={CRUISE_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
						</Route>
					</Routes>
				</SearchFiltersProvider>
			</PaginateProvider>
		</HeaderProvider>
	)
}
