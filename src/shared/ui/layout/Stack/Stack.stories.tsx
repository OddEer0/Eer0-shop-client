import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Stack } from "./Stack"

export default {
	title: "UI/Layout/Stack",
	component: Stack
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = args => <Stack {...args} />

export const Default = Template.bind({})
