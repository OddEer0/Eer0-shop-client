/* eslint-disable boundaries/element-types */
import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import { toggleTheme } from "@/entities/Theme"

const actions = {
	toggleTheme
}

export const useActions = () => {
	const dispatch = useDispatch()

	return bindActionCreators(actions, dispatch)
}
