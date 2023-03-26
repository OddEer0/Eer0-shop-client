import { useRouter } from "next/router"
import { FC, useEffect, useState } from "react"

import { useEncodeParams } from "@/shared/hooks"
import { Switch } from "@/shared/ui"

export const OnlyCashSwitch: FC = () => {
	const params = useEncodeParams()
	const router = useRouter()
	const [isCheck, setIsCheck] = useState(false)

	const changeHandler = () => {
		if (isCheck) {
			setIsCheck(false)
			params.append("isonlycash", "not")
		} else {
			params.remove("isonlycash", "not")
			setIsCheck(true)
		}
	}

	useEffect(() => {
		if (params.has("isonlycash", "not")) {
			setIsCheck(false)
		} else {
			setIsCheck(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.query["isonlycash"]])

	return <Switch onChange={changeHandler} checked={isCheck} />
}
