import "@testing-library/jest-dom"

import { render, screen } from "@/shared/utils/test"

import { Backdrop } from "./Backdrop"

describe("Should render component", () => {
	it("Should render component", () => {
		const { rerender } = render(<Backdrop isShow={true}>is backdrop</Backdrop>)
		expect(screen.getByText(/is backdrop/i)).toBeInTheDocument()
		rerender(<Backdrop isShow={false}>is backdrop</Backdrop>)
		expect(screen.queryByText(/is backdrop/i)).not.toBeInTheDocument()
	})
})
