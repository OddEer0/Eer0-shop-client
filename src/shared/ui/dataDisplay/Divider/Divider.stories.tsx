import { ComponentMeta, ComponentStory } from "@storybook/react"
import styled from "styled-components"

import { Divider } from "./Divider"

export default {
	title: "UI/Data Display/Divider",
	component: Divider
} as ComponentMeta<typeof Divider>

const Wrapper = styled.div`
	height: 700px;
	width: 100%;
`

const Template: ComponentStory<typeof Divider> = args => (
	<Wrapper>
		<Divider {...args} />
	</Wrapper>
)

export const Default = Template.bind({})
Default.args = {
	children: "TEXT"
}
