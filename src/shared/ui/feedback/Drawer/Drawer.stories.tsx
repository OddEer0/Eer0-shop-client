import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Drawer } from "./Drawer"

export default {
	title: "UI/Feedback/Drawer",
	component: Drawer
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = args => <Drawer {...args} />

export const Default = Template.bind({})
