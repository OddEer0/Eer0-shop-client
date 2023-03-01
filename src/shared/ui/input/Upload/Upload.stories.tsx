import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Upload } from "./Upload"

export default {
	title: "UI/Input/Upload",
	component: Upload
} as ComponentMeta<typeof Upload>

const Template: ComponentStory<typeof Upload> = args => <Upload {...args} />

export const Default = Template.bind({})
