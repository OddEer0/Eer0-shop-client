import { ChangeEvent, useState } from "react"

export const useInput = (initialValue = "") => {
	const [value, setValue] = useState(initialValue)

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	return {
		value,
		onChange
	}
}
