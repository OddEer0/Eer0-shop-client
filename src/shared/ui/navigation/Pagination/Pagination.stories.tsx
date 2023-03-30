import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Pagination } from "./Pagination"

export default {
	title: "UI/Navigation/Pagination",
	component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = args => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
	pageCount: 40,
	marginPagesDisplayed: 1,
	pageRangeDisplayed: 9
}

export const Variant = () => (
	<>
		<h2>standard</h2>
		<Pagination pageCount={40} />
		<h2>outlined</h2>
		<Pagination pageCount={40} variant="outlined" />
		<h2>rounded</h2>
		<Pagination pageCount={40} variant="rounded" />
	</>
)

export const Size = () => (
	<>
		<h2>small</h2>
		<Pagination pageCount={40} size="small" />
		<h2>medium</h2>
		<Pagination pageCount={40} />
		<h2>large</h2>
		<Pagination pageCount={40} size="large" />
	</>
)

export const Color = () => (
	<>
		<h2>primary</h2>
		<Pagination pageCount={40} />
		<h2>secondary</h2>
		<Pagination pageCount={40} color="secondary" />
		<h2>tertiary</h2>
		<Pagination pageCount={40} color="tertiary" />
		<h2>quaternary</h2>
		<Pagination pageCount={40} color="quaternary" />
		<h2>success</h2>
		<Pagination pageCount={40} color="success" />
		<h2>danger</h2>
		<Pagination pageCount={40} color="danger" />
		<h2>warning</h2>
		<Pagination pageCount={40} color="warning" />
	</>
)

export const FullDocumentation = () => (
	<>
		<h2>Полная документация функционала по ссылке</h2>
		<a href="https://www.npmjs.com/package/react-paginate" target="_blank" rel="noreferrer">
			https://www.npmjs.com/package/react-paginate
		</a>
	</>
)
