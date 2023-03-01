import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Backdrop } from "./Backdrop"

export default {
	title: "UI/Feedback/Backdrop",
	component: Backdrop
} as ComponentMeta<typeof Backdrop>

const Template: ComponentStory<typeof Backdrop> = args => <Backdrop {...args} />

export const Default = Template.bind({})
