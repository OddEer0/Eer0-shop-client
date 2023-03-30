/* eslint-disable boundaries/element-types */
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { setTheme } from "@/entities/Theme"

const actions = {
	setTheme
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}
