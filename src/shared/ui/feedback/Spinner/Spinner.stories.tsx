import { ComponentMeta, ComponentStory } from "@storybook/react"
import styled from "styled-components"

import { Spinner } from "./Spinner"

export default {
	title: "UI/Feedback/Spinner",
	component: Spinner
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

const Line = styled.div`
	height: 20px;
`

export const Default = Template.bind({})

export const Variant = () => (
	<>
		<h2>standard</h2>
		<Spinner />
		<Line />
		<h2>dashed</h2>
		<h2>snake</h2>
		<Spinner variant="snake" />
		<Line />
		<h2>double snake</h2>
		<Spinner variant="double-snake" />
	</>
)

export const Color = () => (
	<>
		<h2>primary</h2>
		<Spinner />
		<Line />
		<Spinner variant="snake" />
		<Line />
		<Spinner variant="double-snake" />
		<Line />
		<h2>secondary</h2>
		<Spinner color="secondary" />
		<Line />
		<Spinner color="secondary" variant="snake" />
		<Line />
		<Spinner color="secondary" variant="double-snake" />
		<Line />
		<h2>tertiary</h2>
		<Spinner color="tertiary" />
		<Line />
		<Spinner color="tertiary" variant="snake" />
		<Line />
		<Spinner color="tertiary" variant="double-snake" />
		<Line />
		<h2>quaternary</h2>
		<Spinner color="quaternary" />
		<Line />
		<Spinner color="quaternary" variant="snake" />
		<Line />
		<Spinner color="quaternary" variant="double-snake" />
		<Line />
	</>
)

export const Size = () => (
	<>
		<h2>small</h2>
		<Spinner size="small" />
		<Line />
		<Spinner size="small" variant="snake" />
		<Line />
		<Spinner size="small" variant="double-snake" />
		<Line />
		<h2>medium</h2>
		<Spinner size="medium" />
		<Line />
		<Spinner size="medium" variant="snake" />
		<Line />
		<Spinner size="medium" variant="double-snake" />
		<Line />
		<h2>large</h2>
		<Spinner size="large" />
		<Line />
		<Spinner size="large" variant="snake" />
		<Line />
		<Spinner size="large" variant="double-snake" />
		<Line />
	</>
)
