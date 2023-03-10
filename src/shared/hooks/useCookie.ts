import Cookies, { CookieAttributes } from "js-cookie"
import { useState } from "react"

export const useCookie = (
	name: string,
	initialValue: Nullable<string> = null
): [Nullable<string>, (newValue: string, options?: CookieAttributes) => void, () => void] => {
	const [value, setValue] = useState<Nullable<string>>(() => {
		const cookie = Cookies.get(name)
		if (cookie) return cookie

		if (initialValue) {
			Cookies.set(name, initialValue)
		}
		return initialValue
	})

	const updateCookie = (newValue: string, options?: CookieAttributes) => {
		Cookies.set(name, newValue, options)
		setValue(newValue)
	}

	const deleteCookie = () => {
		Cookies.remove(name)
		setValue(null)
	}

	return [value, updateCookie, deleteCookie]
}
