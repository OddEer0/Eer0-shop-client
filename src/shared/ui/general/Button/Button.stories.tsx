import { ComponentMeta, ComponentStory } from "@storybook/react"
import styled from "styled-components"

import { Button } from "./Button"

export default {
	title: "UI/Button",
	component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

const Line = styled.div`
	width: 100%;
	height: 100px;
`

export const Default = Template.bind({})
Default.args = {}

export const Variant = () => (
	<>
		<Button>Text</Button>
		<Button variant="contained">Contained</Button>
		<Button variant="outlined">Outlined</Button>
	</>
)

export const Color = () => (
	<>
		<Button>Primary</Button>
		<Button color="secondary">Secondary</Button>
		<Button color="success">Success</Button>
		<Button color="danger">Danger</Button>
		<Button color="warning">Warning</Button>
		<Line />
		<Button variant="outlined">Primary</Button>
		<Button variant="outlined" color="secondary">
			Secondary
		</Button>
		<Button variant="outlined" color="success">
			Success
		</Button>
		<Button variant="outlined" color="danger">
			Danger
		</Button>
		<Button variant="outlined" color="warning">
			Warning
		</Button>
		<Line />
		<Button variant="contained">Primary</Button>
		<Button variant="contained" color="secondary">
			Secondary
		</Button>
		<Button variant="contained" color="success">
			Success
		</Button>
		<Button variant="contained" color="danger">
			Danger
		</Button>
		<Button variant="contained" color="warning">
			Warning
		</Button>
	</>
)

export const Size = () => (
	<>
		<Button variant="contained" size="small">
			Small
		</Button>
		<Button variant="contained">Medium</Button>
		<Button variant="contained" size="large">
			Large
		</Button>
	</>
)
