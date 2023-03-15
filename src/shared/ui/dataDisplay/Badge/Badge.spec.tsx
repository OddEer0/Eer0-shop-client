import { render, screen } from "@test-utils"
import "@testing-library/jest-dom"

import { Badge } from "./Badge"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<Badge>I text</Badge>)
		expect(screen.getByText(/i text/i)).toBeInTheDocument()
	})

	it("Should render with className", () => {
		render(
			<Badge className="wrapper" classNameBadge="badge-test" variant="content">
				I text
			</Badge>
		)
		expect(screen.getByText(/i text/i)).toHaveClass("wrapper")
		expect(screen.getByText(/0/i)).toHaveClass("badge-test")
	})
})

describe("Render every props", () => {
	it("Default dot variant", () => {
		render(<Badge></Badge>)
		expect(screen.queryByText(/0/i)).toBeNull()
	})

	it("Content variant, content value and maxValue", () => {
		render(<Badge variant="content" content={100} maxValue={99}></Badge>)
		expect(screen.getByText(/99+/i)).toBeInTheDocument()
		expect(screen.getByText(/99+/i)).toHaveClass("content")
		expect(screen.getByText(/99+/i)).not.toHaveClass("dot")
	})

	it("Overlap default circular, default horizontal right and vertical top", () => {
		render(<Badge variant="content"></Badge>)
		expect(screen.getByText(/0/i)).toHaveClass("circular")
		expect(screen.getByText(/0/i)).not.toHaveClass("square")
		expect(screen.getByText(/0/i)).toHaveClass("right")
		expect(screen.getByText(/0/i)).not.toHaveClass("left")
		expect(screen.getByText(/0/i)).toHaveClass("top")
		expect(screen.getByText(/0/i)).not.toHaveClass("bottom")
	})

	it("Overlap square, horizontal left and vertical bottom", () => {
		render(<Badge variant="content" overlap="square" horizontal="left" vertical="bottom"></Badge>)
		expect(screen.getByText(/0/i)).not.toHaveClass("circular")
		expect(screen.getByText(/0/i)).toHaveClass("square")
		expect(screen.getByText(/0/i)).not.toHaveClass("right")
		expect(screen.getByText(/0/i)).toHaveClass("left")
		expect(screen.getByText(/0/i)).not.toHaveClass("top")
		expect(screen.getByText(/0/i)).toHaveClass("bottom")
	})

	it("Color and Size", () => {
		const { rerender } = render(<Badge variant="content" size="small"></Badge>)
		expect(screen.getByText(/0/i)).toHaveClass("small")
		expect(screen.getByText(/0/i)).not.toHaveClass("medium")
		expect(screen.getByText(/0/i)).not.toHaveClass("large")
		expect(screen.getByText(/0/i)).toHaveClass("success")
		expect(screen.getByText(/0/i)).not.toHaveClass("danger")
		expect(screen.getByText(/0/i)).not.toHaveClass("warning")
		expect(screen.getByText(/0/i)).not.toHaveClass("default")
		expect(screen.getByText(/0/i)).not.toHaveClass("warning")
		expect(screen.getByText(/0/i)).not.toHaveClass("primary")
		expect(screen.getByText(/0/i)).not.toHaveClass("secondary")
		expect(screen.getByText(/0/i)).not.toHaveClass("tertiary")
		expect(screen.getByText(/0/i)).not.toHaveClass("quaternary")
		rerender(<Badge variant="content" color="danger" size="medium"></Badge>)
		expect(screen.getByText(/0/i)).not.toHaveClass("small")
		expect(screen.getByText(/0/i)).toHaveClass("medium")
		expect(screen.getByText(/0/i)).not.toHaveClass("success")
		expect(screen.getByText(/0/i)).toHaveClass("danger")
		rerender(<Badge variant="content" color="default" size="large"></Badge>)
		expect(screen.getByText(/0/i)).not.toHaveClass("medium")
		expect(screen.getByText(/0/i)).toHaveClass("large")
		expect(screen.getByText(/0/i)).not.toHaveClass("danger")
		expect(screen.getByText(/0/i)).toHaveClass("default")
		rerender(<Badge variant="content" color="warning"></Badge>)
		expect(screen.getByText(/0/i)).not.toHaveClass("default")
		expect(screen.getByText(/0/i)).toHaveClass("warning")
		rerender(<Badge variant="content" color="primary"></Badge>)
		expect(screen.getByText(/0/i)).not.toHaveClass("warning")
		expect(screen.getByText(/0/i)).toHaveClass("primary")
		rerender(<Badge variant="content" color="secondary"></Badge>)
		expect(screen.getByText(/0/i)).not.toHaveClass("primary")
		expect(screen.getByText(/0/i)).toHaveClass("secondary")
		rerender(<Badge variant="content" color="tertiary"></Badge>)
		expect(screen.getByText(/0/i)).not.toHaveClass("secondary")
		expect(screen.getByText(/0/i)).toHaveClass("tertiary")
		rerender(<Badge variant="content" color="quaternary"></Badge>)
		expect(screen.getByText(/0/i)).not.toHaveClass("tertiary")
		expect(screen.getByText(/0/i)).toHaveClass("quaternary")
	})
})
