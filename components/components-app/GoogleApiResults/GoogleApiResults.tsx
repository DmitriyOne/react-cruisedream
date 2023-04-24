import { FC, useContext } from 'react'

import { PaginateContext } from '@crdr/context'

import { IGoogleApiResult } from '@crdr/interfaces'

import { MyPagination } from '@crdr/components'
import { Container } from '@crdr/ui'

import styles from './google-api-results.module.scss'

interface IProps {
	results: IGoogleApiResult
}

export const GoogleApiResults: FC<IProps> = ({ results }) => {
	const { googleSearchCurrentPage, handlerGooglePaginate } = useContext(PaginateContext)

	return (
		<Container
			className={styles.component}
			width="containerS"
			direction="column"
			align="start"
		>
			<div className={styles.resultCount}>
				About {results.searchInformation?.formattedTotalResults} results (
				{results.searchInformation?.formattedSearchTime} seconds)
			</div>

			{results.items?.map((result) => {
				return (
					<div
						key={result.link}
						className={styles.resultContainer}
					>
						<div>
							<a href={result.link}>
								<h2>
									{result.title}
								</h2>
								<span>
									{result.formattedUrl}
								</span>
							</a>
						</div>

						<p className={styles.resultText}>{result.snippet}</p>
					</div>
				)
			})}

			<MyPagination
				className={styles.pagination}
				amountClassName={styles.amountWrapper}
				resultPerPage={10}
				resultTotal={Number(results.searchInformation?.formattedTotalResults)}
				currentPage={googleSearchCurrentPage}
				handlerPaginate={handlerGooglePaginate}
			/>
		</Container>
	)
}
