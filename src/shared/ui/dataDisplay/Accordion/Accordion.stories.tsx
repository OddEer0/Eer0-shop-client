import { ComponentMeta } from "@storybook/react"
import { BsAlarm, BsApple, BsArchive } from "react-icons/bs"

import { Accordion } from "./Accordion"

export default {
	title: "UI/Data Display/Accordion",
	component: Accordion
} as ComponentMeta<typeof Accordion>

export const Default = () => (
	<Accordion>
		<Accordion.Summary text="first" defaultState={true}>
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
		<Accordion.Summary text="second">
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
		<Accordion.Summary text="third">
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
	</Accordion>
)

export const ControlledMode = () => (
	<Accordion mode="controlled">
		<Accordion.Summary text="first" summaryId="1">
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
		<Accordion.Summary text="second" summaryId="2">
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
		<Accordion.Summary text="third" summaryId="3">
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
	</Accordion>
)

export const SummarySubText = () => (
	<Accordion mode="controlled">
		<Accordion.Summary text="first" subText="sub" summaryId="1">
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
		<Accordion.Summary text="second" subText="text" summaryId="2">
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
		<Accordion.Summary text="third" subText="test" summaryId="3">
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
	</Accordion>
)

export const SummaryCustomIcon = () => (
	<Accordion mode="controlled">
		<Accordion.Summary text="first" subText="sub" summaryId="1" endIcon={<BsArchive />}>
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
		<Accordion.Summary text="second" subText="text" summaryId="2" endIcon={<BsApple />}>
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
		<Accordion.Summary text="third" subText="test" summaryId="3" endIcon={<BsAlarm />}>
			<h2>text</h2>
			<h2>text</h2>
			<h2>text</h2>
		</Accordion.Summary>
	</Accordion>
)
