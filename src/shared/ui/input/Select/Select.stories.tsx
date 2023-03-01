import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Select } from "./Select"

export default {
	title: "UI/Input/Select",
	component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const Default = Template.bind({})
