import { ComponentMeta } from "@storybook/react"
import { useState } from "react"
import styled from "styled-components"

import { Button } from "../../general/Button"

import { Dropdown } from "./Dropdown"

export default {
	title: "UI/Dropdown",
	component: Dropdown
} as ComponentMeta<typeof Dropdown>

// const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />

const Line = styled.div`
	height: 150px;
`

export const Default = () => {
	const [isShow, setShow] = useState(false)

	return (
		<>
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow(true)}>
						CLICK
					</Button>
				}
				isShow={isShow}
				closeHandler={() => setShow(false)}
			>
				<p>CONTENT</p>
			</Dropdown>
		</>
	)
}

export const Placement = () => {
	const [isShow, setShow] = useState(false)
	const [isShow2, setShow2] = useState(false)
	const [isShow3, setShow3] = useState(false)
	const [isShow4, setShow4] = useState(false)
	const [isShow5, setShow5] = useState(false)
	const [isShow6, setShow6] = useState(false)

	return (
		<>
			<Line />
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow(true)}>
						CLICK
					</Button>
				}
				isShow={isShow}
				closeHandler={() => setShow(false)}
				placement="bottom"
			>
				<p>Bottom</p>
			</Dropdown>
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow2(true)}>
						CLICK
					</Button>
				}
				isShow={isShow2}
				closeHandler={() => setShow2(false)}
				placement="bottomLeft"
			>
				<p>BottomLeft</p>
			</Dropdown>
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow3(true)}>
						CLICK
					</Button>
				}
				isShow={isShow3}
				closeHandler={() => setShow3(false)}
				placement="bottomRight"
			>
				<p>BottomRight</p>
			</Dropdown>
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow4(true)}>
						CLICK
					</Button>
				}
				isShow={isShow4}
				closeHandler={() => setShow4(false)}
				placement="top"
			>
				<p>top</p>
			</Dropdown>
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow5(true)}>
						CLICK
					</Button>
				}
				isShow={isShow5}
				closeHandler={() => setShow5(false)}
				placement="topLeft"
			>
				<p>topLeft</p>
			</Dropdown>
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow6(true)}>
						CLICK
					</Button>
				}
				isShow={isShow6}
				closeHandler={() => setShow6(false)}
				placement="topRight"
			>
				<p>topRight</p>
			</Dropdown>
		</>
	)
}

export const Color = () => {
	const [isShow, setShow] = useState(false)
	const [isShow2, setShow2] = useState(false)
	const [isShow3, setShow3] = useState(false)
	const [isShow4, setShow4] = useState(false)

	return (
		<>
			<Line />
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow(true)}>
						primary
					</Button>
				}
				isShow={isShow}
				closeHandler={() => setShow(false)}
				placement="bottom"
				color="primary"
			>
				<p>primary</p>
			</Dropdown>
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow2(true)}>
						secondary
					</Button>
				}
				isShow={isShow2}
				closeHandler={() => setShow2(false)}
				placement="bottom"
				color="secondary"
			>
				<p>secondary</p>
			</Dropdown>
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow3(true)}>
						tertiary
					</Button>
				}
				isShow={isShow3}
				closeHandler={() => setShow3(false)}
				placement="bottom"
				color="tertiary"
			>
				<p>tertiary</p>
			</Dropdown>
			<Dropdown
				mainContent={
					<Button variant="contained" onClick={() => setShow4(true)}>
						quaternary
					</Button>
				}
				isShow={isShow4}
				closeHandler={() => setShow4(false)}
				placement="bottom"
				color="quaternary"
			>
				<p>quaternary</p>
			</Dropdown>
		</>
	)
}
