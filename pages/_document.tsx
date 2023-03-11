import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			}
		} finally {
			sheet.seal()
		}
	}

	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
						rel="stylesheet"
					></link>
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
					<meta name="theme-color" content="#FA1F60" />
					<link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
				</Head>
				<body>
					<Main />
					<div id="myportal" />
					<NextScript />
				</body>
			</Html>
		)
	}
}
