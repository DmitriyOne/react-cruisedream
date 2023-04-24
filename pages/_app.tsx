import { FC, ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import { AlertProvider, HeaderProvider, PaginateProvider, SearchSelectedTitlesProvider, SearchSelectorsProvider, SearchTitleProvider } from '@crdr/context'
import { wrapper } from '@crdr/store'

import { Layout } from '@crdr/ui'

import 'react-datepicker/dist/react-datepicker.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'

import '../styles/my-lightbox.scss'
import '../styles/global.scss'

type NextPageWithLayout = NextPage & {
	// eslint-disable-next-line no-unused-vars
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export const App: FC<AppPropsWithLayout> = ({ Component, ...rest }) => {
	const { store, props } = wrapper.useWrappedStore(rest)
	const getLayout = Component.getLayout ?? ((page) => page)

	return (
		<Provider store={store}>
			<AlertProvider>
				<HeaderProvider>
					<SearchSelectorsProvider>
						<SearchTitleProvider>
							<SearchSelectedTitlesProvider>
								<PaginateProvider>
									<Layout>
										<Head>
											<meta name="viewport" content="width=device-width, initial-scale=1" />
										</Head>
										{getLayout(<Component {...props.pageProps} />)}
									</Layout>
								</PaginateProvider>
							</SearchSelectedTitlesProvider>
						</SearchTitleProvider>
					</SearchSelectorsProvider>
				</HeaderProvider>
			</AlertProvider>
		</Provider>
	)
}

export default App
