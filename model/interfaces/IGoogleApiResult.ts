interface IGoogleResultInfo {
	formattedSearchTime: string
	formattedTotalResults: string
	searchTime: number
	totalResults: string
}

interface IImage {
	src: string
}

interface IThumbnail {
	src: string
	width: string
	height: string
}

interface IPageMap {
	cse_image: IImage[]
	cse_thumbnail: IThumbnail[]
}

interface IGoogleResultItems {
	cacheId: string
	displayLink: string
	formattedUrl: string
	htmlFormattedUrl: string
	htmlSnippet: string
	htmlTitle: string
	kind: string
	link: string
	snippet: string
	title: string
	pagemap: IPageMap
}

export interface IGoogleApiResult {
	items: IGoogleResultItems[]
	searchInformation: IGoogleResultInfo
}
