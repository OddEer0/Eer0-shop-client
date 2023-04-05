import { ComponentMeta } from "@storybook/react"
import { useState } from "react"

import { circleOpenAnimation } from "@/shared/animation"

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
			<Backdrop variants={circleOpenAnimation} initial="closed" animate="open" isShow={isShow}>
				<Spinner variant="double-snake" />
				<Button onClick={() => setIsShow(prev => !prev)} variant="contained">
					HIDE BACKDROP
				</Button>
			</Backdrop>
		</>
	)
}
