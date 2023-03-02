import { render, screen } from "@test-utils"
import "@testing-library/jest-dom"

import { Divider } from "./Divider"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<Divider>TEXT</Divider>)
		expect(screen.getByText(/text/i)).toBeInTheDocument()
	})

	it("Render with every align and orientation", () => {
		const { rerender } = render(<Divider>TEXT</Divider>)
		expect(screen.getByText(/text/i)).toHaveClass("center")
		expect(screen.getByText(/text/i)).toHaveClass("horizontal")
		rerender(
			<Divider textAlign="left" orientation="vertical">
				TEXT
			</Divider>
		)
		expect(screen.getByText(/text/i)).not.toHaveClass("center")
		expect(screen.getByText(/text/i)).toHaveClass("left")
		expect(screen.getByText(/text/i)).not.toHaveClass("horizontal")
		expect(screen.getByText(/text/i)).toHaveClass("vertical")
		rerender(<Divider textAlign="right">TEXT</Divider>)
		expect(screen.getByText(/text/i)).not.toHaveClass("left")
		expect(screen.getByText(/text/i)).toHaveClass("right")
	})
})
