import { ComponentMeta, ComponentStory } from "@storybook/react"

import { AutoComplete } from "./AutoComplete"

export default {
	title: "UI/Input/AutoComplete",
	component: AutoComplete
} as ComponentMeta<typeof AutoComplete>

const Template: ComponentStory<typeof AutoComplete> = args => <AutoComplete {...args} />

export const Default = Template.bind({})
