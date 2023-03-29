import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { render, screen } from "@/shared/utils/test"

import { Checkbox } from "./Checkbox"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} data-testid="radio" />)
		expect(screen.getByTestId("radio")).toBeInTheDocument()
	})
})

describe("Render every props", () => {
	it("label and placement", () => {
		const { rerender } = render(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} label="text" />)
		expect(screen.getByText(/text/i)).toBeInTheDocument()
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("right")
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("left")
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("top")
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("bottom")
		rerender(
			<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} data-testid="radio" label="text" placement="left" />
		)
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("left")
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("right")
		rerender(
			<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} data-testid="radio" label="text" placement="top" />
		)
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("top")
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("left")
		rerender(
			<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} data-testid="radio" label="text" placement="bottom" />
		)
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("bottom")
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("top")
	})

	it("Checkbox color", () => {
		const { rerender } = render(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} />)
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("primary")
		rerender(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} color="secondary" />)
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("primary")
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("secondary")
		rerender(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} color="tertiary" />)
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("secondary")
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("tertiary")
		rerender(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} color="quaternary" />)
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("tertiary")
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("quaternary")
		rerender(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} color="success" />)
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("quaternary")
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("success")
		rerender(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} color="danger" />)
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("success")
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("danger")
		rerender(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} color="warning" />)
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("danger")
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("warning")
	})

	it("Checkbox size", () => {
		const { rerender } = render(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} />)
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("medium")
		rerender(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} checkboxSize="small" />)
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("medium")
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("small")
		rerender(<Checkbox checkedIcon={<p></p>} uncheckedIcon={<p></p>} checkboxSize="large" />)
		expect(screen.getByTestId("checkbox-wrapper")).not.toHaveClass("small")
		expect(screen.getByTestId("checkbox-wrapper")).toHaveClass("large")
	})

	it("Checkbox custom icon", () => {
		render(<Checkbox checkedIcon={<p>check</p>} uncheckedIcon={<p>uncheck</p>} />)
		expect(screen.getByText("check")).toBeInTheDocument()
		expect(screen.getByText("uncheck")).toBeInTheDocument()
	})
})

describe("Checkbox events", () => {
	it("Checkbox click event", async () => {
		render(<Checkbox checkedIcon={<p></p>} label="text" uncheckedIcon={<p></p>} data-testid="checkbox" />)
		const label = screen.getByText("text")
		const checkbox = screen.getByTestId("checkbox")
		expect(label).toBeInTheDocument()
		expect(checkbox).not.toBeChecked()
		await userEvent.click(label)
		expect(checkbox).toBeChecked()
	})
})
