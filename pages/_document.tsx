import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import { HeadFavicon, HeadFonts } from '@crdr/ui'

class MainDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render() {
		return (
			<Html translate="no" lang="ru">
				<Head>
					<HeadFonts />
					<HeadFavicon />
				</Head>

				<body>
					<Main />
					<div id="modal-root" />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MainDocument
