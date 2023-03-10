/* eslint-disable boundaries/element-types */
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { setTheme, toggleTheme } from "@/entities/Theme"

const actions = {
	toggleTheme,
	setTheme
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}
