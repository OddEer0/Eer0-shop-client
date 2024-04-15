/* eslint-disable import/order */
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { render, screen } from "@/shared/utils/test"

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
		render(<TextField data-testid="input" />)
		expect(screen.getByTestId("wrapper")).toHaveClass("outlined")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("standard")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("filled")
		expect(screen.getByTestId("wrapper")).toHaveClass("medium")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("small")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("large")
		expect(screen.getByTestId("input")).toHaveAttribute("type", "text")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "password")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "number")
	})

	it("Should render standard, size small, type password", () => {
		render(<TextField type="password" data-testid="input" variant="standard" inputSize="small" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("outlined")
		expect(screen.getByTestId("wrapper")).toHaveClass("standard")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("filled")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("medium")
		expect(screen.getByTestId("wrapper")).toHaveClass("small")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("large")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "text")
		expect(screen.getByTestId("input")).toHaveAttribute("type", "password")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "number")
	})

	it("Should render filled, size large, type number", () => {
		render(<TextField type="number" data-testid="input" variant="filled" inputSize="large" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("outlined")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("standard")
		expect(screen.getByTestId("wrapper")).toHaveClass("filled")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("medium")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("small")
		expect(screen.getByTestId("wrapper")).toHaveClass("large")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "text")
		expect(screen.getByTestId("input")).not.toHaveAttribute("type", "password")
		expect(screen.getByTestId("input")).toHaveAttribute("type", "number")
	})

	it("Should render primary color", () => {
		const { rerender } = render(<TextField />)
		expect(screen.getByTestId("wrapper")).toHaveClass("primary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("secondary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("tertiary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("quaternary")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("success")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("danger")
		expect(screen.getByTestId("wrapper")).not.toHaveClass("warning")
		rerender(<TextField color="secondary" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("primary")
		expect(screen.getByTestId("wrapper")).toHaveClass("secondary")
		rerender(<TextField color="tertiary" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("secondary")
		expect(screen.getByTestId("wrapper")).toHaveClass("tertiary")
		rerender(<TextField color="quaternary" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("tertiary")
		expect(screen.getByTestId("wrapper")).toHaveClass("quaternary")
		rerender(<TextField color="success" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("quaternary")
		expect(screen.getByTestId("wrapper")).toHaveClass("success")
		rerender(<TextField color="danger" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("success")
		expect(screen.getByTestId("wrapper")).toHaveClass("danger")
		rerender(<TextField color="warning" />)
		expect(screen.getByTestId("wrapper")).not.toHaveClass("danger")
		expect(screen.getByTestId("wrapper")).toHaveClass("warning")
	})

	it("Should render label and sub text", () => {
		render(<TextField label="I label" subText="I sub text" />)
		expect(screen.getByTestId("label")).toBeInTheDocument()
		expect(screen.getByText(/I label/i))
		expect(screen.getByTestId("sub-text")).toBeInTheDocument()
		expect(screen.getByText(/I sub text/i))
	})

	it("Should render start and end icon", () => {
		render(
			<TextField
				startIcon={<div data-testid="start-icon">start</div>}
				endIcon={<div data-testid="end-icon">end</div>}
			/>
		)
		expect(screen.getByTestId("start-icon")).toBeInTheDocument()
		expect(screen.getByTestId("end-icon")).toBeInTheDocument()
		expect(screen.getByText(/start/i)).toBeInTheDocument()
		expect(screen.getByText(/end/i)).toBeInTheDocument()
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
