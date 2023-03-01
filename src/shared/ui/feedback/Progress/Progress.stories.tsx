import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Progress } from "./Progress"

export default {
	title: "UI/Feedback/Progress",
	component: Progress
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = args => <Progress {...args} />

export const Default = Template.bind({})
