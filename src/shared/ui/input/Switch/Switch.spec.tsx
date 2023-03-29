import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { render, screen } from "@/shared/utils/test"

import { Switch } from "./Switch"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<Switch data-testid="switch" />)
		expect(screen.getByTestId("switch")).toBeInTheDocument()
	})
})

describe("Should render every props", () => {
	it("Switch size prop", () => {
		const { rerender } = render(<Switch />)
		const wrapper = screen.getByTestId("switch-wrapper")
		expect(wrapper).toHaveClass("medium")
		rerender(<Switch switchSize="small" />)
		expect(wrapper).not.toHaveClass("medium")
		expect(wrapper).toHaveClass("small")
		rerender(<Switch switchSize="large" />)
		expect(wrapper).not.toHaveClass("small")
		expect(wrapper).toHaveClass("large")
	})

	it("Switch color props", () => {
		const { rerender } = render(<Switch />)
		const wrapper = screen.getByTestId("switch-wrapper")
		expect(wrapper).toHaveClass("primary")
		rerender(<Switch color="secondary" />)
		expect(wrapper).not.toHaveClass("primary")
		expect(wrapper).toHaveClass("secondary")
		rerender(<Switch color="tertiary" />)
		expect(wrapper).not.toHaveClass("secondary")
		expect(wrapper).toHaveClass("tertiary")
		rerender(<Switch color="quaternary" />)
		expect(wrapper).not.toHaveClass("tertiary")
		expect(wrapper).toHaveClass("quaternary")
		rerender(<Switch color="success" />)
		expect(wrapper).not.toHaveClass("quaternary")
		expect(wrapper).toHaveClass("success")
		rerender(<Switch color="danger" />)
		expect(wrapper).not.toHaveClass("success")
		expect(wrapper).toHaveClass("danger")
		rerender(<Switch color="warning" />)
		expect(wrapper).not.toHaveClass("danger")
		expect(wrapper).toHaveClass("warning")
	})

	it("Switch icon prop", () => {
		render(<Switch icon={<p>icon</p>} />)
		expect(screen.getByText(/icon/i)).toBeInTheDocument()
	})
})

describe("Switch events", () => {
	it("Switch click", async () => {
		render(<Switch data-testid="switch" icon={<p>icon</p>} />)
		const circle = screen.getByText(/icon/i)
		const input = screen.getByTestId("switch")
		expect(input).not.toBeChecked()
		await userEvent.click(circle)
		expect(input).toBeChecked()
		await userEvent.click(circle)
		expect(input).not.toBeChecked()
	})
})
