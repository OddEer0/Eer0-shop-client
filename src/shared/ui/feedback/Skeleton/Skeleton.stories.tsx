import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Skeleton } from "./Skeleton"

export default {
	title: "UI/Feedback/Skeleton",
	component: Skeleton
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = args => <Skeleton {...args} />

export const Default = Template.bind({})
Default.args = {
	height: "35px"
}

export const Variant = () => (
	<>
		<h2>square</h2>
		<Skeleton maxWidth="150px" height="75px" />
		<h2>rounded</h2>
		<Skeleton maxWidth="150px" height="75px" variant="rounded" />
		<h2>circle</h2>
		<Skeleton maxWidth="150px" height="75px" variant="circle" />
	</>
)
