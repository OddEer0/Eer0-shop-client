import { ComponentMeta, ComponentStory } from "@storybook/react"
import { BiAlarm } from "react-icons/bi"
import styled from "styled-components"

import { TextField } from "./TextField"

export default {
	title: "UI/Input/TextField",
	component: TextField
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />

const Line = styled.div`
	height: 50px;
`

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

export const Size = () => (
	<>
		<TextField subText="sub text" label="small" inputSize="small" />
		<TextField subText="sub text" label="default medium" />
		<TextField subText="sub text" label="large" inputSize="large" />
		<Line />
		<TextField variant="filled" subText="sub text" label="small" inputSize="small" />
		<TextField variant="filled" subText="sub text" label="default medium" />
		<TextField variant="filled" subText="sub text" label="large" inputSize="large" />
		<Line />
		<TextField variant="standard" subText="sub text" label="small" inputSize="small" />
		<TextField variant="standard" subText="sub text" label="default medium" />
		<TextField variant="standard" subText="sub text" label="large" inputSize="large" />
	</>
)

export const color = () => (
	<>
		<TextField endIcon={<BiAlarm />} subText="sub text" label="primary" color="primary" />
		<TextField endIcon={<BiAlarm />} subText="sub text" label="secondary" color="secondary" />
		<TextField endIcon={<BiAlarm />} subText="sub text" label="tertiary" color="tertiary" />
		<TextField endIcon={<BiAlarm />} subText="sub text" label="quaternary" color="quaternary" />
		<TextField endIcon={<BiAlarm />} subText="sub text" label="success" color="success" />
		<TextField endIcon={<BiAlarm />} subText="sub text" label="danger" color="danger" />
		<TextField endIcon={<BiAlarm />} subText="sub text" label="warning" color="warning" />
		<Line />
		<TextField endIcon={<BiAlarm />} variant="filled" subText="sub text" label="primary" color="primary" />
		<TextField endIcon={<BiAlarm />} variant="filled" subText="sub text" label="secondary" color="secondary" />
		<TextField endIcon={<BiAlarm />} variant="filled" subText="sub text" label="tertiary" color="tertiary" />
		<TextField endIcon={<BiAlarm />} variant="filled" subText="sub text" label="quaternary" color="quaternary" />
		<TextField endIcon={<BiAlarm />} variant="filled" subText="sub text" label="success" color="success" />
		<TextField endIcon={<BiAlarm />} variant="filled" subText="sub text" label="danger" color="danger" />
		<TextField endIcon={<BiAlarm />} variant="filled" subText="sub text" label="warning" color="warning" />
		<Line />
		<TextField endIcon={<BiAlarm />} variant="standard" subText="sub text" label="primary" color="primary" />
		<TextField endIcon={<BiAlarm />} variant="standard" subText="sub text" label="secondary" color="secondary" />
		<TextField endIcon={<BiAlarm />} variant="standard" subText="sub text" label="tertiary" color="tertiary" />
		<TextField endIcon={<BiAlarm />} variant="standard" subText="sub text" label="quaternary" color="quaternary" />
		<TextField endIcon={<BiAlarm />} variant="standard" subText="sub text" label="success" color="success" />
		<TextField endIcon={<BiAlarm />} variant="standard" subText="sub text" label="danger" color="danger" />
		<TextField endIcon={<BiAlarm />} variant="standard" subText="sub text" label="warning" color="warning" />
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
