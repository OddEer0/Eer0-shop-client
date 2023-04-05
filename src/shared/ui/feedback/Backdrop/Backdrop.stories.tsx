import { ComponentMeta } from "@storybook/react"
import { useState } from "react"

import { Button } from "../../input"
import { Spinner } from "../Spinner"

import { Backdrop } from "./Backdrop"

export default {
	title: "UI/Feedback/Backdrop",
	component: Backdrop
} as ComponentMeta<typeof Backdrop>

export const Default = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<Button onClick={() => setIsShow(prev => !prev)} variant="contained">
				SHOW BACKDROP
			</Button>
			<Backdrop isShow={isShow}>
				<Spinner variant="double-snake" />
				<Button variant="outlined">HIDE BACKDROP</Button>
			</Backdrop>
		</>
	)
}
