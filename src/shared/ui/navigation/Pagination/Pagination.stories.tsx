import { ComponentMeta, ComponentStory } from "@storybook/react"
import { useState } from "react"
import { BiBadge } from "react-icons/bi"
import { BsArrowDownLeftCircle } from "react-icons/bs"

import { Pagination } from "./Pagination"

export default {
	title: "UI/Navigation/Pagination",
	component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = args => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
	count: 20,
	defaultCount: 6
}

export const Variant = () => (
	<>
		<h2>Default standard</h2>
		<Pagination count={100} />
		<h2>Outlined</h2>
		<Pagination layoutId="pagination4" count={100} variant="outlined" />
		<h2>Rounded</h2>
		<Pagination layoutId="pagination3" variant="rounded" count={100} />
	</>
)

export const Size = () => (
	<>
		<h2>small</h2>
		<Pagination size="small" count={100} />
		<h2>default medium</h2>
		<Pagination layoutId="pagination4" count={100} />
		<h2>large</h2>
		<Pagination size="large" layoutId="pagination3" count={100} />
	</>
)

export const Color = () => (
	<>
		<h2>default primary</h2>
		<Pagination count={100} />
		<h2>secondary</h2>
		<Pagination color="secondary" layoutId="pagination2" count={100} />
		<h2>tertiary</h2>
		<Pagination color="tertiary" layoutId="pagination3" count={100} />
		<h2>quaternary</h2>
		<Pagination color="quaternary" layoutId="pagination4" count={100} />
		<h2>success</h2>
		<Pagination color="success" layoutId="pagination5" count={100} />
		<h2>danger</h2>
		<Pagination color="danger" layoutId="pagination6" count={100} />
		<h2>warning</h2>
		<Pagination color="warning" layoutId="pagination7" count={100} />
	</>
)

export const CustomArrow = () => (
	<Pagination count={100} nextArrow={<BiBadge />} prevArrow={<BsArrowDownLeftCircle />} />
)

export const DefaultCountAndRange = () => (
	<>
		<h2>Range 10</h2>
		<Pagination count={100} range={10} />
		<h2>Range 15</h2>
		<Pagination layoutId="pagination2" count={100} range={15} />
		<h2>Default Count 50</h2>
		<Pagination layoutId="pagination3" defaultCount={50} count={100} range={11} />
	</>
)

export const SiblingAndBoundary = () => (
	<>
		<h2>SiblingCount 2</h2>
		<Pagination count={100} range={10} defaultCount={50} siblingCount={2} />
		<h2>BoundaryCount 2</h2>
		<Pagination layoutId="pagination2" count={100} range={10} defaultCount={50} boundaryCount={2} />
		<h2>Boundary and Sibling Count 2</h2>
		<Pagination layoutId="pagination3" count={100} range={10} defaultCount={50} boundaryCount={2} siblingCount={2} />
	</>
)

export const ControlPagination = () => {
	const [val, setVal] = useState(0)

	return (
		<>
			<h2>{val}</h2>
			<Pagination count={20} changeHandle={setVal} />
		</>
	)
}
