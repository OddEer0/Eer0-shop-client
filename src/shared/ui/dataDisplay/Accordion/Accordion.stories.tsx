import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Accordion } from "./Accordion"

export default {
	title: "UI/Data Display/Accordion",
	component: Accordion
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />

export const Default = Template.bind({})
