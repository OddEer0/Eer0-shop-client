import { ComponentMeta, ComponentStory } from "@storybook/react"
import { BiAlarm } from "react-icons/bi"

import { TextField } from "./TextField"

export default {
	title: "UI/TextField",
	component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />

export const Default = Template.bind({})

export const Variant = () => (
	<>
		<TextField label="outlined" variant="outlined" />
		<TextField label="standard" variant="standard" />
		<TextField label="filled" variant="filled" />
	</>
)

export const Label = () => (
	<>
		<TextField label="I Label" />
	</>
)

export const SubText = () => (
	<>
		<TextField subText="sub text" />
	</>
)

export const color = () => (
	<>
		<TextField subText="sub text" label="primary" color="primary" />
		<TextField subText="sub text" label="secondary" color="secondary" />
		<TextField subText="sub text" label="success" color="success" />
		<TextField subText="sub text" label="danger" color="danger" />
		<TextField subText="sub text" label="warning" color="warning" />
	</>
)

export const Type = () => (
	<>
		<TextField type="text" label="text" />
		<TextField type="password" label="password" />
		<TextField type="number" label="number" />
	</>
)

export const Icon = () => (
	<>
		<TextField label="start icon" startIcon={<BiAlarm />} />
		<TextField label="end icon" endIcon={<BiAlarm />} />
		<TextField inputSize="small" label="start icon" startIcon={<BiAlarm />} />
		<TextField inputSize="small" label="end icon" endIcon={<BiAlarm />} />
		<TextField inputSize="large" label="start icon" startIcon={<BiAlarm />} />
		<TextField inputSize="large" label="end icon" endIcon={<BiAlarm />} />
	</>
)
