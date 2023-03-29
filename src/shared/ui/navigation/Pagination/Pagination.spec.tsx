import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { render, screen } from "@/shared/utils/test"

import { Pagination } from "./Pagination"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<Pagination count={10} />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
	})

	it("Should render component with className", () => {
		render(<Pagination count={10} nextArrow={<span>Arrow</span>} className="pre" data-testid="pagination" />)
		expect(screen.getByTestId("pagination")).toHaveClass("pre")
	})
})

describe("Pagination with every props", () => {
	it("Pagination Variant", () => {
		const { rerender } = render(<Pagination count={10} variant="outlined" />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
		rerender(<Pagination variant="rounded" count={10} />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
	})

	it("Pagination Size", () => {
		const { rerender } = render(<Pagination count={10} size="small" />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
		rerender(<Pagination count={10} size="large" />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
	})

	it("Pagination color", () => {
		const { rerender } = render(<Pagination count={10} color="secondary" />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
		rerender(<Pagination count={10} color="tertiary" />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
		rerender(<Pagination count={10} color="quaternary" />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
		rerender(<Pagination count={10} color="success" />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
		rerender(<Pagination count={10} color="danger" />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
		rerender(<Pagination count={10} color="warning" />)
		expect(screen.getByText(/10/i)).toBeInTheDocument()
	})

	it("Pagination Range and default count", () => {
		render(<Pagination count={20} range={10} defaultCount={10} />)
		expect(screen.queryByText("2")).not.toBeInTheDocument()
	})

	it("Pagination sibling and boundary", () => {
		render(<Pagination count={20} range={10} defaultCount={10} siblingCount={3} boundaryCount={2} />)
		expect(screen.getByText(/20/i)).toBeInTheDocument()
		expect(screen.getByText(/19/i)).toBeInTheDocument()
		expect(screen.getByText("2")).toBeInTheDocument()
		expect(screen.getByText("3")).toBeInTheDocument()
	})

	it("Pagination custom arrow", () => {
		render(<Pagination count={20} nextArrow={<span>Next Arrow</span>} prevArrow={<span>Prev Arrow</span>} />)
		expect(screen.getByText(/next arrow/i)).toBeInTheDocument()
		expect(screen.getByText(/prev arrow/i)).toBeInTheDocument()
	})
})

describe("Pagination events", () => {
	it("click event", async () => {
		render(<Pagination count={100} />)
		const li = screen.getByText(/100/i)
		expect(screen.getByText(/2/i)).toBeInTheDocument()
		await userEvent.click(li)
		expect(screen.queryByText(/2/i)).not.toBeInTheDocument()
		expect(screen.getByText(/99/i)).toBeInTheDocument()
	})

	it("click arrow button", async () => {
		render(<Pagination count={10} range={7} nextArrow={<span>Next Arrow</span>} prevArrow={<span>Prev Arrow</span>} />)
		const nextBtn = screen.getByText(/next arrow/i)
		const prevBtn = screen.getByText(/prev arrow/i)
		expect(screen.queryByText(/6/i)).not.toBeInTheDocument()
		await userEvent.click(nextBtn)
		await userEvent.click(nextBtn)
		await userEvent.click(nextBtn)
		await userEvent.click(nextBtn)
		expect(screen.getByText(/6/i)).toBeInTheDocument()
		expect(screen.queryByText(/2/i)).not.toBeInTheDocument()
		await userEvent.click(prevBtn)
		expect(screen.getByText(/2/i)).toBeInTheDocument()
		expect(screen.queryByText(/6/i)).not.toBeInTheDocument()
	})
})
