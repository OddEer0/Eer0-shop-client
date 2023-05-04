import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"

export const withCSR =
	<T>(next: (context: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<T>>) =>
	async (ctx: GetServerSidePropsContext) => {
		const isCSR = ctx.req.url?.startsWith("/_next")

		if (isCSR) {
			return {
				props: {}
			}
		}

		return next?.(ctx)
	}
