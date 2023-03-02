import { ComponentMeta, ComponentStory } from "@storybook/react"

import { AvatarGroup } from "./AvatarGroup"

export default {
	title: "UI/Data Display/AvatarGroup",
	component: AvatarGroup
} as ComponentMeta<typeof AvatarGroup>

const Template: ComponentStory<typeof AvatarGroup> = args => <AvatarGroup {...args} />

export const Default = Template.bind({})
