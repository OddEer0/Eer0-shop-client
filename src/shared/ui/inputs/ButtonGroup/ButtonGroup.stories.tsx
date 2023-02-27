import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "../Button/Button"

import { ButtonGroup } from "./ButtonGroup"

export default {
	title: "UI/ButtonGroup",
	component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = args => <ButtonGroup {...args} />

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
