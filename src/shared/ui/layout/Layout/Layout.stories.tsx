import { ComponentMeta } from "@storybook/react"
import styled from "styled-components"

import { Layout } from "./index"

export default {
	title: "UI/Layout/Layout",
	component: Layout
} as ComponentMeta<typeof Layout>

const Header = styled(Layout.Header)`
	height: 100px;
	background: orange;
	font-size: 48px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Aside = styled(Layout.Aside)`
	width: 400px;
	background: cyan;
	font-size: 48px;
	color: white;
	display: flex;
	justify-content: center;
`

const Content = styled(Layout.Content)`
	height: 2000px;
	background: purple;
	font-size: 48px;
	color: white;
	display: flex;
	justify-content: center;
`

const Footer = styled(Layout.Footer)`
	height: 400px;
	background: lime;
	font-size: 48px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Usage = () => (
	<>
		<Layout>
			<Header>Header</Header>
			<Aside>Aside</Aside>
			<Content>Content</Content>
			<Aside>Aside 2</Aside>
			<Footer>Footer</Footer>
		</Layout>
	</>
)

export const DoubleLayout = () => (
	<>
		<Layout>
			<Aside>Aside</Aside>
			<Content>
				<Layout>
					<Header>Header</Header>
					<Content>Content</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Content>
			<Aside>Aside 2</Aside>
		</Layout>
	</>
)
