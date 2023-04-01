import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Select } from "./Select"

export default {
	title: "UI/Input/Select",
	component: Select
} as ComponentMeta<typeof Select>

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" }
]

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
	options
}

export const Color = () => (
	<>
		<h2>primary</h2>
		<Select options={options} />
		<h2>secondary</h2>
		<Select selectColor="secondary" options={options} />
		<h2>tertiary</h2>
		<Select selectColor="tertiary" options={options} />
		<h2>quaternary</h2>
		<Select selectColor="quaternary" options={options} />
		<h2>success</h2>
		<Select selectColor="success" options={options} />
		<h2>danger</h2>
		<Select selectColor="danger" options={options} />
		<h2>warning</h2>
		<Select selectColor="warning" options={options} />
	</>
)

export const MenuColor = () => (
	<>
		<h2>primary</h2>
		<Select options={options} />
		<h2>secondary</h2>
		<Select menuBgColor="secondary" selectColor="secondary" options={options} />
		<h2>tertiary</h2>
		<Select menuBgColor="tertiary" selectColor="tertiary" options={options} />
		<h2>quaternary</h2>
		<Select menuBgColor="quaternary" selectColor="quaternary" options={options} />
	</>
)

export const Size = () => (
	<>
		<h2>small</h2>
		<Select selectSize="small" options={options} />
		<h2>medium</h2>
		<Select options={options} />
		<h2>large</h2>
		<Select selectSize="large" options={options} />
	</>
)

export const FullDocumentation = () => (
	<>
		<h2>Полная документация по ссылке </h2>
		<a href="https://react-select.com/home" target="_blank" rel="noreferrer">
			https://react-select.com/home
		</a>
	</>
)
