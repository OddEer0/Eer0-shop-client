import { ComponentMeta } from "@storybook/react"
import { useState } from "react"

import { circleOpenAnimation } from "@/shared/animation"

import { Button } from "../../input"

import { Modal } from "./Modal"

export default {
	title: "UI/Feedback/Modal",
	component: Modal
} as ComponentMeta<typeof Modal>

export const Default = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<Button onClick={() => setIsShow(true)}>Open</Button>
			<Modal
				isShow={isShow}
				closeHandler={() => setIsShow(false)}
				variants={circleOpenAnimation}
				animate="open"
				exit="closed"
				initial="closed"
			>
				Content
			</Modal>
		</>
	)
}

export const Color = () => {
	const [isShow, setIsShow] = useState(false)
	const [isShow2, setIsShow2] = useState(false)
	const [isShow3, setIsShow3] = useState(false)
	const [isShow4, setIsShow4] = useState(false)

	return (
		<>
			<h2>primary</h2>
			<Button onClick={() => setIsShow(true)}>Open</Button>
			<Modal
				isShow={isShow}
				closeHandler={() => setIsShow(false)}
				variants={circleOpenAnimation}
				animate="open"
				exit="closed"
				initial="closed"
			>
				Content
			</Modal>
			<h2>secondary</h2>
			<Button onClick={() => setIsShow(true)}>Open</Button>
			<Modal color="secondary" isShow={isShow2} closeHandler={() => setIsShow2(false)}>
				Content
			</Modal>
			<h2>tertiary</h2>
			<Button onClick={() => setIsShow(true)}>Open</Button>
			<Modal color="tertiary" isShow={isShow3} closeHandler={() => setIsShow3(false)}>
				Content
			</Modal>
			<h2>quaternary</h2>
			<Button onClick={() => setIsShow(true)}>Open</Button>
			<Modal color="quaternary" isShow={isShow4} closeHandler={() => setIsShow4(false)}>
				Content
			</Modal>
		</>
	)
}
