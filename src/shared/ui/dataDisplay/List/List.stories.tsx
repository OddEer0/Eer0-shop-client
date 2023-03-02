import { ComponentMeta, ComponentStory } from "@storybook/react"

import { List } from "./List"

export default {
	title: "UI/Data Display/List",
	component: List
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = args => <List {...args} />

export const Default = Template.bind({})
