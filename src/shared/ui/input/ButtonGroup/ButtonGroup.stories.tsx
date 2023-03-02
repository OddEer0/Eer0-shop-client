import { ComponentMeta, ComponentStory } from "@storybook/react"
import styled from "styled-components"

import { Button } from "../Button/Button"

import { ButtonGroup } from "./ButtonGroup"

export default {
	title: "UI/Input/ButtonGroup",
	component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = args => <ButtonGroup {...args} />

const Line = styled.div`
	height: 40px;
`

export const Default = Template.bind({})
Default.args = {
	children: (
		<>
			<Button variant="contained">CLICK</Button>
			<Button variant="contained">CLICK</Button>
			<Button variant="contained">CLICK</Button>
		</>
	)
}

export const ButtonVariant = () => (
	<>
		<ButtonGroup>
			<Button>CLICK</Button>
			<Button>CLICK</Button>
			<Button>CLICK</Button>
		</ButtonGroup>
		<Line />
		<ButtonGroup>
			<Button variant="outlined">CLICK</Button>
			<Button variant="outlined">CLICK</Button>
			<Button variant="outlined">CLICK</Button>
		</ButtonGroup>
		<Line />
		<ButtonGroup>
			<Button variant="contained">CLICK</Button>
			<Button variant="contained">CLICK</Button>
			<Button variant="contained">CLICK</Button>
		</ButtonGroup>
	</>
)

export const Direction = () => (
	<>
		<ButtonGroup direction="column">
			<Button>CLICK</Button>
			<Button>CLICK</Button>
			<Button>CLICK</Button>
		</ButtonGroup>
		<Line />
		<ButtonGroup direction="column">
			<Button variant="outlined">CLICK</Button>
			<Button variant="outlined">CLICK</Button>
			<Button variant="outlined">CLICK</Button>
		</ButtonGroup>
		<Line />
		<ButtonGroup direction="column">
			<Button variant="contained">CLICK</Button>
			<Button variant="contained">CLICK</Button>
			<Button variant="contained">CLICK</Button>
		</ButtonGroup>
	</>
)
