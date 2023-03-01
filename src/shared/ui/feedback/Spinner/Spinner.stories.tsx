import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Spinner } from "./Spinner"

export default {
	title: "UI/Feedback/Spinner",
	component: Spinner
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

export const Default = Template.bind({})
