/* eslint-disable import/order */
import { render, screen } from "@test-utils"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { Dropdown } from "./Dropdown"

describe("Should render component", () => {
	let isShow: boolean
	let closeHandler: () => void
	beforeEach(() => {
		isShow = false
		closeHandler = jest.fn(() => (isShow = false))
	})

	it("Should render component", () => {
		render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={isShow}
				closeHandler={closeHandler}
				placement="bottom"
				color="primary"
			>
				<p>I Body</p>
			</Dropdown>
		)
		expect(screen.getByText(/i test/i)).toBeInTheDocument()
		expect(screen.getByText(/i body/i)).toBeInTheDocument()
	})
})

describe("Should render every props", () => {
	let closeHandler: () => void
	beforeEach(() => {
		closeHandler = jest.fn()
	})

	it("Placement default bottom, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				placement="bottom"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).toHaveClass("bottom")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomRight")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("top")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topRight")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Placement bottomLeft, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				placement="bottomLeft"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottom")
		expect(screen.getByTestId("dropdown")).toHaveClass("bottomLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomRight")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("top")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topRight")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Placement bottomRight, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				placement="bottomRight"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottom")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomLeft")
		expect(screen.getByTestId("dropdown")).toHaveClass("bottomRight")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("top")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topRight")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Placement top, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				placement="top"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottom")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomRight")
		expect(screen.getByTestId("dropdown")).toHaveClass("top")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topRight")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Placement topLeft, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				placement="topLeft"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottom")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomRight")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("top")
		expect(screen.getByTestId("dropdown")).toHaveClass("topLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topRight")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Placement topRight, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				placement="topRight"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottom")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomLeft")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("bottomRight")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("top")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("topLeft")
		expect(screen.getByTestId("dropdown")).toHaveClass("topRight")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Color primary, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				color="primary"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).toHaveClass("primary")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("secondary")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("tertiary")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("quaternary")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Color secondary, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				color="secondary"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).not.toHaveClass("primary")
		expect(screen.getByTestId("dropdown")).toHaveClass("secondary")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("tertiary")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("quaternary")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Color tertiary, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				color="tertiary"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).not.toHaveClass("primary")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("secondary")
		expect(screen.getByTestId("dropdown")).toHaveClass("tertiary")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("quaternary")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Color quaternary, screenshot", () => {
		const { asFragment } = render(
			<Dropdown
				mainContent={<div>I Test</div>}
				isShow={true}
				closeHandler={closeHandler}
				color="quaternary"
				data-testid="dropdown"
			>
				<p>Test</p>
			</Dropdown>
		)
		expect(screen.getByTestId("dropdown")).not.toHaveClass("primary")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("secondary")
		expect(screen.getByTestId("dropdown")).not.toHaveClass("tertiary")
		expect(screen.getByTestId("dropdown")).toHaveClass("quaternary")
		expect(asFragment()).toMatchSnapshot()
	})
})

describe("Dropdown events", () => {
	let isShow: boolean
	let closeHandler: () => void
	let openHandler: () => void
	beforeEach(() => {
		isShow = false
		closeHandler = jest.fn(() => (isShow = false))
		openHandler = jest.fn(() => (isShow = true))
	})

	it("open and close dropdown", async () => {
		render(
			<>
				<p data-testid="outline">Outline item</p>
				<Dropdown
					mainContent={
						<div data-testid="click" onClick={openHandler}>
							I Test
						</div>
					}
					isShow={isShow}
					closeHandler={closeHandler}
					placement="bottom"
					color="primary"
					data-testid="dropdown"
				>
					<p data-testid="content">Test</p>
				</Dropdown>
			</>
		)
		expect(screen.getByTestId("dropdown")).not.toHaveClass("show")
		await userEvent.click(screen.getByTestId("click"))
		expect(openHandler).toHaveBeenCalled()
		await userEvent.click(screen.getByTestId("outline"))
		expect(closeHandler).toHaveBeenCalled()
	})
})
