import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Upload } from "./Upload"

export default {
	title: "UI/Input/Upload",
	component: Upload
} as ComponentMeta<typeof Upload>

const Template: ComponentStory<typeof Upload> = args => <Upload {...args} />

export const Default = Template.bind({})
Default.args = {
	children: "CLICK"
}

export const HiddenIcon = () => <Upload isDefaultIcon={false}>CLICK</Upload>

export const Size = () => (
	<>
		<h2>small</h2>
		<Upload uploadSize="small">CLICK</Upload>
		<h2>medium</h2>
		<Upload>CLICK</Upload>
		<h2>large</h2>
		<Upload uploadSize="large">CLICK</Upload>
	</>
)

export const Color = () => (
	<>
		<h2>primary</h2>
		<Upload>CLICK</Upload>
		<h2>secondary</h2>
		<Upload color="secondary">CLICK</Upload>
		<h2>tertiary</h2>
		<Upload color="tertiary">CLICK</Upload>
		<h2>quaternary</h2>
		<Upload color="quaternary">CLICK</Upload>
		<h2>success</h2>
		<Upload color="success">CLICK</Upload>
		<h2>danger</h2>
		<Upload color="danger">CLICK</Upload>
		<h2>warning</h2>
		<Upload color="warning">CLICK</Upload>
	</>
)
