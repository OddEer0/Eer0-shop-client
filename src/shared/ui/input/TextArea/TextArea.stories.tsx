import { ComponentMeta, ComponentStory } from "@storybook/react"

import { TextArea } from "./TextArea"

export default {
	title: "UI/Input/TextArea",
	component: TextArea
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />

export const Default = Template.bind({})
