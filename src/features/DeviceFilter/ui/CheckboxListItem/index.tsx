import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"

import { useEncodeParams } from "@/shared/hooks"
import { Checkbox } from "@/shared/ui"

import { $CheckboxListItem } from "./CheckboxListItem.styles"

interface CheckboxListItemProps {
	name: string
	value: string
}

export const CheckboxListItem: FC<CheckboxListItemProps> = ({ value, name }) => {
	const params = useEncodeParams()
	const router = useRouter()
	const [isCheck, setIsCheck] = useState(false)

	const changeHandler = () => {
		if (isCheck) {
			setIsCheck(false)
			params.remove(name, value)
		} else {
			setIsCheck(false)
			params.append(name, value)
		}
	}

	useEffect(() => {
		if (params.has(name, value)) {
			setIsCheck(true)
		} else {
			setIsCheck(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.query[name]])

	return (
		<$CheckboxListItem>
			<Checkbox checkboxSize="large" value={value} onChange={changeHandler} checked={isCheck} />
			<h4 onClick={changeHandler}>{value}</h4>
		</$CheckboxListItem>
	)
}
