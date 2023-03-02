import Head from "next/head"
import { FC } from "react"

interface IMeta {
	title: string
	description?: string
}

export const Meta: FC<IMeta> = ({ title, description }) => {
	return (
		<Head>
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<title>{title}</title>
			{description ? (
				<meta itemProp="description" name="description" content={description} />
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}
		</Head>
	)
}
