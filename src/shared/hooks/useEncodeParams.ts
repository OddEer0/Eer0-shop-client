import { useRouter } from "next/router"

export const useEncodeParams = () => {
	const { query, push } = useRouter()

	const removeAllParams = () => {
		push(
			{
				query: {}
			},
			undefined,
			{ shallow: true }
		)
	}

	const getParams = (paramName: string) => {
		const prev = query[paramName]
		if (Array.isArray(prev)) {
			return prev.join(",")
		}
		return prev
	}

	const removeAll = (paramName: string) => {
		const prev = query[paramName]
		if (!prev) return
		const queryResult = query
		delete queryResult[paramName]

		push(
			{
				query: queryResult
			},
			undefined,
			{ shallow: true }
		)
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

	const append = async (paramName: string, value?: string) => {
		if (!value) return
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

		push(
			{
				query: {
					...query,
					[paramName]: result
				}
			},
			undefined,
			{ shallow: true }
		)
	}

	const appendMany = (paramsObj: { [key: string]: string }) => {
		const params = new Map(Object.entries(paramsObj))
		if (!params.size) return
		const queryResult = new Map(Object.entries(query))

		params.forEach((val, key) => {
			if (val && !has(key, val)) {
				if (queryResult.has(key)) {
					const prev = queryResult.get(key)
					let result = val

					if (Array.isArray(prev)) {
						result = [...prev, val].join(",")
					} else {
						result = [prev, val].join(",")
					}
					queryResult.set(key, result)
				} else {
					queryResult.set(key, val)
				}
			}
		})

		push(
			{
				query: Object.fromEntries(queryResult)
			},
			undefined,
			{ shallow: true }
		)
	}

	const remove = (paramName: string, value: string) => {
		if (!has(paramName, value)) return
		let result = query[paramName] as string | string[]
		const queryResult = new Map(Object.entries(query))

		if (Array.isArray(result)) {
			result = result.filter(url => url !== value).join(",")
		} else {
			result = result
				.split(",")
				.filter(url => url !== value)
				.join(",")
		}

		if (!result) {
			queryResult.delete(paramName)
		} else {
			queryResult.set(paramName, result)
		}

		push(
			{
				query: Object.fromEntries(queryResult)
			},
			undefined,
			{ shallow: true }
		)
	}

	return {
		getParams,
		removeAllParams,
		appendMany,
		removeAll,
		has,
		append,
		remove
	}
}
