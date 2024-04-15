import { getCookies, setCookie } from "cookies-next"
import { GetServerSidePropsContext } from "next"

import { initializeStore } from "./store"

export const GSSPTheme = (ctx: GetServerSidePropsContext) => {
	const { req, res } = ctx
	const cookies = getCookies({ req, res })

	if (cookies.theme) {
		if (cookies.theme === "light") return initializeStore({ isInit: true, theme: "light" })
		else initializeStore({ isInit: true })
	}
	setCookie("theme", "dark")
	return initializeStore({ isInit: true })
}
