import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import { useEncodeParams } from "./useEncodeParams"

export const useCheckboxToggleParam = (paramName: string, paramValue: string) => {
	const { query } = useRouter()
	const params = useEncodeParams()
	const [checked, setChecked] = useState(false)

	const onChange = () => {
		if (checked) {
			setChecked(false)
			params.remove(paramName, paramValue)
		} else {
			setChecked(true)
			params.append(paramName, paramValue)
		}
	}

	useEffect(() => {
		if (params.has(paramName, paramValue)) {
			setChecked(true)
		} else {
			setChecked(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query[paramName]])

	return {
		checked,
		onChange
	}
}
