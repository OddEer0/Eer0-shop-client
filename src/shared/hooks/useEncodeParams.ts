import { useRouter } from "next/router"

export const useEncodeParams = () => {
	const { query, push } = useRouter()

	const removeAllParams = () => {
		push({
			query: {}
		})
	}

	const getParams = (paramName: string) => {
		return query[paramName]
	}

	const removeAll = (paramName: string) => {
		const prev = query[paramName]
		if (!prev) return
		const queryResult = query
		delete queryResult[paramName]

		push({
			query: queryResult
		})
	}

	const has = (paramName: string, value: string) => {
		const prev = query[paramName]
		if (prev) {
			if (Array.isArray(prev)) {
				return prev.some(url => url === value)
			}
			return prev.split(",").some(url => url === value)
		}
		return false
	}

	const append = (paramName: string, value: string) => {
		if (has(paramName, value)) return
		const prev = query[paramName]
		let result = value

		if (prev) {
			if (Array.isArray(prev)) {
				result = [...prev, value].join(",")
			} else {
				result = [prev, value].join(",")
			}
		}

		push({
			query: {
				...query,
				[paramName]: result
			}
		})
	}

	const remove = (paramName: string, value: string) => {
		if (!has(paramName, value)) return
		let result = query[paramName] as string | string[]
		let queryResult = query

		if (Array.isArray(result)) {
			result = result.filter(url => url !== value).join(",")
		} else {
			result = result
				.split(",")
				.filter(url => url !== value)
				.join(",")
		}

		if (!result) {
			delete queryResult[paramName]
		} else {
			queryResult = {
				...queryResult,
				[paramName]: result
			}
		}

		push({
			query: queryResult
		})
	}

	return {
		getParams,
		removeAllParams,
		removeAll,
		has,
		append,
		remove
	}
}
