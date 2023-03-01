import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Tost } from "./Tost"

export default {
	title: "UI/Feedback/Tost",
	component: Tost
} as ComponentMeta<typeof Tost>

const Template: ComponentStory<typeof Tost> = args => <Tost {...args} />

export const Default = Template.bind({})
