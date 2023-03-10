import { themeSlice } from "./theme.slice"

export const fetchTheme =
	(name: "light" | "dark"): AppThunk =>
	async dispatch => {
		const timeoutPromise = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout))

		await timeoutPromise(200)

		dispatch(themeSlice.actions.setTheme(name))
	}
