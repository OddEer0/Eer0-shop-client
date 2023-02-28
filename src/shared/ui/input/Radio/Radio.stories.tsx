import { ComponentMeta, ComponentStory } from "@storybook/react"
import { BiAngry, BiHappy } from "react-icons/bi"

import { Radio } from "./Radio"

export default {
	title: "UI/Input/Radio",
	component: Radio
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />

export const Default = Template.bind({})

export const LabelPlacement = () => (
	<>
		<Radio name="0" label="Right" />
		<Radio name="0" label="Top" placement="top" />
		<Radio name="0" label="Left" placement="left" />
		<Radio name="0" label="Bottom" placement="bottom" />
	</>
)

export const Size = () => (
	<>
		<h2>small</h2>
		<Radio radioSize="small" name="radio" />
		<h2>default medium</h2>
		<Radio name="radio" />
		<h2>large</h2>
		<Radio radioSize="large" name="radio" />
	</>
)

export const Color = () => (
	<>
		<h2>default primary</h2>
		<Radio label="text" name="1" />
		<Radio label="text" name="1" defaultChecked />
		<h2>secondary</h2>
		<Radio label="text" color="secondary" name="2" />
		<Radio label="text" color="secondary" name="2" defaultChecked />
		<h2>tertiary</h2>
		<Radio label="text" color="tertiary" name="3" />
		<Radio label="text" color="tertiary" name="3" defaultChecked />
		<h2>quaternary</h2>
		<Radio label="text" color="quaternary" name="4" />
		<Radio label="text" color="quaternary" name="4" defaultChecked />
		<h2>success</h2>
		<Radio label="text" color="success" name="5" />
		<Radio label="text" color="success" name="5" defaultChecked />
		<h2>danger</h2>
		<Radio label="text" color="danger" name="6" />
		<Radio label="text" color="danger" name="6" defaultChecked />
		<h2>warning</h2>
		<Radio label="text" color="warning" name="7" />
		<Radio label="text" color="warning" name="7" defaultChecked />
	</>
)

export const Icon = () => (
	<>
		<Radio uncheckedIcon={<BiAngry />} name="100" checkedIcon={<BiHappy />} />
		<Radio uncheckedIcon={<BiAngry />} radioSize="small" name="100" checkedIcon={<BiHappy />} />
		<Radio uncheckedIcon={<BiAngry />} defaultChecked radioSize="large" name="100" checkedIcon={<BiHappy />} />
		<Radio uncheckedIcon={<BiAngry />} name="100" checkedIcon={<BiHappy />} />
	</>
)
