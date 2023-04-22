import { ComponentMeta, ComponentStory } from "@storybook/react"
import { useState } from "react"

import { Counter } from "./Counter"

export default {
	title: "UI/Input/Counter",
	component: Counter
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = args => <Counter {...args} />

export const Default = Template.bind({})

export const ControllerChangeableCounter = () => {
	const [value, setValue] = useState(1)

	return (
		<>
			<h2>{value}</h2>
			<Counter value={value} changeValue={val => setValue(val)} />
		</>
	)
}

export const SetCount = () => <Counter setCount={5} maxValue={50} minValue={0} value={0} />
