import { ComponentMeta, ComponentStory } from "@storybook/react"
import { useState } from "react"
import styled from "styled-components"

import { Slider } from "./Slider"

export default {
	title: "UI/Input/Slider",
	component: Slider
} as ComponentMeta<typeof Slider>

const Line = styled.div`
	height: 50px;
`
const Line2 = styled.div`
	height: 20px;
`

const Template: ComponentStory<typeof Slider> = args => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
	range: { min: 0, max: 100 },
	start: 0,
	connect: [true, false]
}

export const Size = () => (
	<>
		<h2>small</h2>
		<Line2 />
		<Slider size="small" range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
		<Line />
		<h2>medium</h2>
		<Line2 />
		<Slider range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
		<Line />
		<h2>large</h2>
		<Line2 />
		<Slider size="large" range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
	</>
)

export const Color = () => (
	<>
		<h2>primary</h2>
		<Line2 />
		<Slider color="primary" range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
		<Line />
		<h2>secondary</h2>
		<Line2 />
		<Slider color="secondary" range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
		<Line />
		<h2>tertiary</h2>
		<Line2 />
		<Slider color="tertiary" range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
		<Line />
		<h2>quaternary</h2>
		<Line2 />
		<Slider color="quaternary" range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
		<Line />
		<h2>success</h2>
		<Line2 />
		<Slider color="success" range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
		<Line />
		<h2>danger</h2>
		<Line2 />
		<Slider color="danger" range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
		<Line />
		<h2>warning</h2>
		<Line2 />
		<Slider color="warning" range={{ min: 0, max: 100 }} start={0} connect={[true, false]} />
		<Line />
	</>
)

export const Multiple = () => (
	<>
		<Line2 />
		<Slider color="tertiary" range={{ min: 0, max: 100 }} start={[0, 100]} connect={[false, true, false]} />
		<Line />
		<Line2 />
		<Slider color="tertiary" range={{ min: 0, max: 100 }} start={[0, 40, 100]} connect={[false, true, true, false]} />
		<Line />
	</>
)

export const Tooltip = () => (
	<>
		<Line />
		<Slider
			tooltips={true}
			color="tertiary"
			range={{ min: 0, max: 100 }}
			start={[0, 100]}
			connect={[false, true, false]}
		/>
		<Line />
	</>
)

const Wrapper = styled.div`
	.noUi-target {
		height: 500px;
	}
`

export const Orientation = () => (
	<>
		<h2>Пока не в рабочем состояний!</h2>
		<Line />
		<Wrapper>
			<Slider
				tooltips={true}
				color="tertiary"
				range={{ min: 0, max: 100 }}
				start={[0, 100]}
				orientation="vertical"
				connect={[false, true, false]}
			/>
		</Wrapper>
		<Line />
	</>
)

export const Controllable = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [value, setValue] = useState<string>("0")

	return (
		<>
			<h2>{value}</h2>
			<Line />
			<Slider
				tooltips={true}
				color="tertiary"
				range={{ min: 0, max: 100 }}
				start={[0, 100]}
				connect={[false, true, false]}
				onUpdate={(val: string[]) => setValue(val[0].split(".")[0])}
			/>
			<Line />
		</>
	)
}

export const Other = () => (
	<>
		<h2>Полная документация по ссылке </h2>
		<a href="https://mmarkelov.github.io/react-nouislider/" target="_blank" rel="noreferrer">
			https://mmarkelov.github.io/react-nouislider/
		</a>
		<br />
		<a href="https://refreshless.com/nouislider/" target="_blank" rel="noreferrer">
			https://refreshless.com/nouislider/
		</a>
	</>
)
