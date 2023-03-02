import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Grid } from "./Grid"

export default {
	title: "UI/Layout/Grid",
	component: Grid
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = args => <Grid {...args} />

export const Default = Template.bind({})
