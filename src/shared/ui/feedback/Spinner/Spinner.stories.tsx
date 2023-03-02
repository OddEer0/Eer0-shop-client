import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Spinner } from "./Spinner"

export default {
	title: "UI/Feedback/Spinner",
	component: Spinner
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

export const Default = Template.bind({})

export const Variant = () => (
	<>
		<h2>standard</h2>
		<Spinner />
		<h2>dashed</h2>
		<Spinner variant="dashed" />
		<h2>snake</h2>
		<Spinner variant="snake" />
		<h2>double snake</h2>
		<Spinner variant="double-snake" />
	</>
)

export const Color = () => (
	<>
		<h2>primary</h2>
		<Spinner />
		<Spinner variant="dashed" />
		<Spinner variant="snake" />
		<Spinner variant="double-snake" />
		<h2>secondary</h2>
		<Spinner color="secondary" />
		<Spinner color="secondary" variant="dashed" />
		<Spinner color="secondary" variant="snake" />
		<Spinner color="secondary" variant="double-snake" />
		<h2>tertiary</h2>
		<Spinner color="tertiary" />
		<Spinner color="tertiary" variant="dashed" />
		<Spinner color="tertiary" variant="snake" />
		<Spinner color="tertiary" variant="double-snake" />
		<h2>quaternary</h2>
		<Spinner color="quaternary" />
		<Spinner color="quaternary" variant="dashed" />
		<Spinner color="quaternary" variant="snake" />
		<Spinner color="quaternary" variant="double-snake" />
	</>
)

export const Size = () => (
	<>
		<h2>small</h2>
		<Spinner size="small" />
		<Spinner size="small" variant="dashed" />
		<Spinner size="small" variant="snake" />
		<Spinner size="small" variant="double-snake" />
		<h2>medium</h2>
		<Spinner size="medium" />
		<Spinner size="medium" variant="dashed" />
		<Spinner size="medium" variant="snake" />
		<Spinner size="medium" variant="double-snake" />
		<h2>large</h2>
		<Spinner size="large" />
		<Spinner size="large" variant="dashed" />
		<Spinner size="large" variant="snake" />
		<Spinner size="large" variant="double-snake" />
	</>
)
