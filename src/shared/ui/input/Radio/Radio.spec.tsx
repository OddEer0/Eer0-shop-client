import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { render, screen } from "@/shared/utils/test"

import { Radio } from "./Radio"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<Radio data-testid="radio" />)
		expect(screen.getByTestId("radio")).toBeInTheDocument()
	})
})

describe("Render every props", () => {
	it("label and placement", () => {
		const { rerender } = render(<Radio label="text" />)
		expect(screen.getByText(/text/i)).toBeInTheDocument()
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("right")
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("left")
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("top")
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("bottom")
		rerender(<Radio data-testid="radio" label="text" placement="left" />)
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("left")
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("right")
		rerender(<Radio data-testid="radio" label="text" placement="top" />)
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("top")
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("left")
		rerender(<Radio data-testid="radio" label="text" placement="bottom" />)
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("bottom")
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("top")
	})

	it("Radio color", () => {
		const { rerender } = render(<Radio />)
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("primary")
		rerender(<Radio color="secondary" />)
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("primary")
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("secondary")
		rerender(<Radio color="tertiary" />)
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("secondary")
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("tertiary")
		rerender(<Radio color="quaternary" />)
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("tertiary")
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("quaternary")
		rerender(<Radio color="success" />)
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("quaternary")
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("success")
		rerender(<Radio color="danger" />)
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("success")
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("danger")
		rerender(<Radio color="warning" />)
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("danger")
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("warning")
	})

	it("Radio size", () => {
		const { rerender } = render(<Radio />)
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("medium")
		rerender(<Radio radioSize="small" />)
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("medium")
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("small")
		rerender(<Radio radioSize="large" />)
		expect(screen.getByTestId("radio-wrapper")).not.toHaveClass("small")
		expect(screen.getByTestId("radio-wrapper")).toHaveClass("large")
	})

	it("Radio custom icon", () => {
		render(<Radio checkedIcon={<p>check</p>} uncheckedIcon={<p>uncheck</p>} />)
		expect(screen.getByText("check")).toBeInTheDocument()
		expect(screen.getByText("uncheck")).toBeInTheDocument()
	})
})

describe("Radio events", () => {
	it("Radio click event", async () => {
		render(<Radio data-testid="radio" />)
		expect(screen.getByTestId("radio")).not.toBeChecked()
		await userEvent.click(screen.getByTestId("radio"))
		expect(screen.getByTestId("radio")).toBeChecked()
	})
})
