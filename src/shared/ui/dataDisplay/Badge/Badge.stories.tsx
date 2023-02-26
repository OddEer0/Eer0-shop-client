import { ComponentMeta, ComponentStory } from "@storybook/react"
import styled from "styled-components"

import { AVATAR_URL, AVATAR_URL2, AVATAR_URL3, AVATAR_URL4, AVATAR_URL5, AVATAR_URL6 } from "@/shared/constants"

import { Avatar } from "../Avatar"

import { Badge } from "./Badge"

export default {
	title: "UI/Badge",
	component: Badge
} as ComponentMeta<typeof Badge>

const Circle = styled.div`
	width: 100px;
	height: 50px;
	background: orange;
	border-radius: 50%;
`

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
	children: <Avatar url={AVATAR_URL} />
}

export const Variant = () => (
	<>
		<h2>Default dot</h2>
		<Badge>
			<Avatar url={AVATAR_URL5} />
		</Badge>
		<h2>content</h2>
		<Badge variant="content">
			<Avatar url={AVATAR_URL4} />
		</Badge>
		<h2>content max value</h2>
		<Badge variant="content" content={10}>
			<Avatar url={AVATAR_URL2} />
		</Badge>
		<h2>content max value</h2>
		<Badge variant="content" content={100} maxValue={99}>
			<Avatar url={AVATAR_URL6} />
		</Badge>
	</>
)

export const Overlap = () => (
	<>
		<h2>Default circular</h2>
		<Badge>
			<Avatar url={AVATAR_URL2} />
		</Badge>
		<h2>circle</h2>
		<Badge>
			<Circle />
		</Badge>
		<h2>Square</h2>
		<Badge overlap="square">
			<Avatar variant="square" url={AVATAR_URL4} />
		</Badge>
	</>
)

export const HorizontalVertical = () => (
	<>
		<h2>Default horizontal right, vertical top</h2>
		<Badge>
			<Avatar url={AVATAR_URL3} />
		</Badge>
		<h2>horizontal left, vertical top</h2>
		<Badge horizontal="left">
			<Avatar url={AVATAR_URL4} />
		</Badge>
		<h2>horizontal right, vertical bottom</h2>
		<Badge vertical="bottom">
			<Avatar url={AVATAR_URL5} />
		</Badge>
		<h2>horizontal left, vertical bottom</h2>
		<Badge horizontal="left" vertical="bottom">
			<Avatar url={AVATAR_URL6} />
		</Badge>
	</>
)

export const Color = () => (
	<>
		<p>Default success</p>
		<Badge>
			<Avatar url={AVATAR_URL5} />
		</Badge>
		<p>Danger</p>
		<Badge color="danger">
			<Avatar url={AVATAR_URL4} />
		</Badge>
		<p>Default</p>
		<Badge color="default">
			<Avatar url={AVATAR_URL3} />
		</Badge>
		<p>Warning</p>
		<Badge color="warning">
			<Avatar url={AVATAR_URL2} />
		</Badge>
		<p>Primary</p>
		<Badge color="primary">
			<Avatar url={AVATAR_URL6} />
		</Badge>
		<p>Secondary</p>
		<Badge color="secondary">
			<Avatar url={AVATAR_URL} />
		</Badge>
	</>
)

export const Size = () => (
	<>
		<p>small</p>
		<Badge size="small">
			<Avatar url={AVATAR_URL5} />
		</Badge>
		<Badge size="small" variant="content" content={10}>
			<Avatar url={AVATAR_URL5} />
		</Badge>
		<p>Default medium</p>
		<Badge>
			<Avatar url={AVATAR_URL4} />
		</Badge>
		<Badge variant="content" content={10}>
			<Avatar url={AVATAR_URL4} />
		</Badge>
		<p>large</p>
		<Badge size="large">
			<Avatar url={AVATAR_URL3} />
		</Badge>
		<Badge size="large" variant="content" content={10}>
			<Avatar url={AVATAR_URL3} />
		</Badge>
	</>
)
