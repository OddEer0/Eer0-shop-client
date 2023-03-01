import { ComponentMeta, ComponentStory } from "@storybook/react"
import { BiHappy } from "react-icons/bi"

import { Switch } from "./Switch"

export default {
	title: "UI/Input/Switch",
	component: Switch
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />

export const Default = Template.bind({})

export const Size = () => (
	<>
		<h2>small</h2>
		<Switch switchSize="small" />
		<h2>default medium</h2>
		<Switch />
		<h2>large</h2>
		<Switch switchSize="large" />
	</>
)

export const Color = () => (
	<>
		<h2>default primary</h2>
		<Switch defaultChecked />
		<h2>secondary</h2>
		<Switch defaultChecked color="secondary" />
		<h2>tertiary</h2>
		<Switch defaultChecked color="tertiary" />
		<h2>quaternary</h2>
		<Switch defaultChecked color="quaternary" />
		<h2>success</h2>
		<Switch defaultChecked color="success" />
		<h2>danger</h2>
		<Switch defaultChecked color="danger" />
		<h2>warning</h2>
		<Switch defaultChecked color="warning" />
	</>
)

export const Icon = () => (
	<>
		<Switch switchSize="small" icon={<BiHappy />} />
		<Switch icon={<BiHappy />} />
		<Switch switchSize="large" icon={<BiHappy />} />
	</>
)
