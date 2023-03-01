import { ComponentMeta, ComponentStory } from "@storybook/react"
import { BiAngry, BiHappy } from "react-icons/bi"

import { Checkbox } from "./Checkbox"

export default {
	title: "UI/Input/Checkbox",
	component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />

export const Default = Template.bind({})

export const Size = () => (
	<>
		<h2>small</h2>
		<Checkbox checkboxSize="small" />
		<h2>default medium</h2>
		<Checkbox />
		<h2>large</h2>
		<Checkbox checkboxSize="large" />
	</>
)

export const LabelPlacement = () => (
	<>
		<Checkbox label="right" />
		<Checkbox label="top" placement="top" />
		<Checkbox label="left" placement="left" />
		<Checkbox label="bottom" placement="bottom" />
	</>
)

export const Color = () => (
	<>
		<h2>default primary</h2>
		<Checkbox label="text" />
		<h2>secondary</h2>
		<Checkbox label="text" color="secondary" />
		<h2>tertiary</h2>
		<Checkbox label="text" color="tertiary" />
		<h2>quaternary</h2>
		<Checkbox label="text" color="quaternary" />
		<h2>success</h2>
		<Checkbox label="text" color="success" />
		<h2>danger</h2>
		<Checkbox label="text" color="danger" />
		<h2>warning</h2>
		<Checkbox label="text" color="warning" />
	</>
)

export const Icon = () => (
	<>
		<Checkbox checkboxSize="small" checkedIcon={<BiHappy />} uncheckedIcon={<BiAngry />} />
		<Checkbox checkedIcon={<BiHappy />} uncheckedIcon={<BiAngry />} />
		<Checkbox checkboxSize="large" checkedIcon={<BiHappy />} uncheckedIcon={<BiAngry />} />
	</>
)
