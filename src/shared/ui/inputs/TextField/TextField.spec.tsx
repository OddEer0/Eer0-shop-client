/* eslint-disable import/order */
import { render, screen } from "@test-utils"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { TextField } from "./TextField"

describe("Should render TextField component", () => {
	it("Should render component", () => {
		render(<TextField />)
		expect(screen.getByRole("textbox")).toBeInTheDocument()
	})

	it("Should render component", () => {
		render(<TextField className="eer0" />)
		expect(screen.getByTestId("wrapper")).toHaveClass("eer0")
	})
})

describe("Should render TextField with every props, snapshot", () => {
	it("Should render default outlined, size medium, type text", () => {
		const { asFragment } = render(<TextField data-testid="input" />)
		expect(screen.getByTestId("wrapper")).toHaveClass("outlined")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("standard")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("filled")
		expect(screen.getByTestId("wrapper")).toHaveClass("medium")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("small")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("large")
		expect(screen.getByTestId("input")).toHaveAttribute("type", "text")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "password")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "number")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render standard, size small, type password", () => {
		const { asFragment } = render(
			<TextField type="password" data-testid="input" variant="standard" inputSize="small" />
		)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("outlined")
		expect(screen.getByTestId("wrapper")).toHaveClass("standard")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("filled")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("medium")
		expect(screen.getByTestId("wrapper")).toHaveClass("small")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("large")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "text")
		expect(screen.getByTestId("input")).toHaveAttribute("type", "password")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "number")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render filled, size large, type number", () => {
		const { asFragment } = render(<TextField type="number" data-testid="input" variant="filled" inputSize="large" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("outlined")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("standard")
		expect(screen.getByTestId("wrapper")).toHaveClass("filled")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("medium")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("small")
		expect(screen.getByTestId("wrapper")).toHaveClass("large")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "text")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "password")
		expect(screen.getByTestId("input")).toHaveAttribute("type", "number")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render primary color", () => {
		const { asFragment } = render(<TextField />)
		expect(screen.getByTestId("wrapper")).toHaveClass("primary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("secondary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("success")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("danger")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render secondary color", () => {
		const { asFragment } = render(<TextField color="secondary" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("primary")
		expect(screen.getByTestId("wrapper")).toHaveClass("secondary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("success")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("danger")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render danger color", () => {
		const { asFragment } = render(<TextField color="danger" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("primary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("secondary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("success")
		expect(screen.getByTestId("wrapper")).toHaveClass("danger")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render success color", () => {
		const { asFragment } = render(<TextField color="success" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("primary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("secondary")
		expect(screen.getByTestId("wrapper")).toHaveClass("success")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("danger")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render warning color", () => {
		const { asFragment } = render(<TextField color="warning" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("primary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("secondary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("success")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("danger")
		expect(screen.getByTestId("wrapper")).toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render label and sub text", () => {
		const { asFragment } = render(<TextField label="I label" subText="I sub text" />)
		expect(screen.getByTestId("label")).toBeInTheDocument()
		expect(screen.getByText(/I label/i))
		expect(screen.getByTestId("sub-text")).toBeInTheDocument()
		expect(screen.getByText(/I sub text/i))
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render start and end icon", () => {
		const { asFragment } = render(
			<TextField
				startIcon={<div data-testid="start-icon">start</div>}
				endIcon={<div data-testid="end-icon">end</div>}
			/>
		)
		expect(screen.getByTestId("start-icon")).toBeInTheDocument()
		expect(screen.getByTestId("end-icon")).toBeInTheDocument()
		expect(screen.getByText(/start/i)).toBeInTheDocument()
		expect(screen.getByText(/end/i)).toBeInTheDocument()
		expect(asFragment()).toMatchSnapshot()
	})
})

describe("TextField events", () => {
	it("typing input", async () => {
		render(<TextField data-testid="input" />)
		expect(screen.queryByText(/testing/)).toBeNull()
		await userEvent.type(screen.getByRole("textbox"), "testing")
		expect(screen.getByTestId("input")).toHaveValue("testing")
	})

	it("click label", async () => {
		render(<TextField data-testid="input" label="I label" />)
		const label = screen.getByTestId("label")
		const input = screen.getByTestId("input")
		expect(input).not.toHaveFocus()
		await userEvent.click(label)
		expect(input).toHaveFocus()
	})

	it("click password icon handler", async () => {
		render(<TextField data-testid="input" type="password" />)
		expect(screen.getByTestId("input")).toHaveAttribute("type", "password")
		expect(screen.getByTestId("close-eye")).toBeInTheDocument()
		expect(screen.queryByTestId("open-eye")).toBeNull()
		await userEvent.click(screen.getByTestId("close-eye"))
		expect(screen.queryByTestId("close-eye")).toBeNull()
		expect(screen.getByTestId("input")).toHaveAttribute("type", "text")
		expect(screen.getByTestId("open-eye")).toBeInTheDocument()
	})
})
