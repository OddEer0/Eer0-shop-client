import { ComponentMeta, ComponentStory } from "@storybook/react"

import { ConfirmModal } from "./ConfirmModal"

export default {
	title: "UI/Feedback/ConfirmModal",
	component: ConfirmModal
} as ComponentMeta<typeof ConfirmModal>

const Template: ComponentStory<typeof ConfirmModal> = args => <ConfirmModal {...args} />

export const Default = Template.bind({})
