import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Tooltip } from "./Tooltip"

export default {
	title: "UI/Data Display/Tooltip",
	component: Tooltip
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />

export const Default = Template.bind({})
