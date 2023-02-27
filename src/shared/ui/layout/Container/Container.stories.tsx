import { ComponentMeta, ComponentStory } from "@storybook/react"
import styled from "styled-components"

import { Container } from "./index"

export default {
	title: "UI/Layout/Container",
	component: Container
} as ComponentMeta<typeof Container>

const OrangeBg = styled.div`
	width: 100%;
	height: 500px;
	background: orange;
`

const Template: ComponentStory<typeof Container> = args => <Container {...args} />

export const Default = Template.bind({})
Default.args = {
	children: <OrangeBg />,
	width: 400
}
