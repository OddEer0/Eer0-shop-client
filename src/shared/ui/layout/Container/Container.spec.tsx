import "@testing-library/jest-dom"

import { render, screen } from "@/shared/utils/test"

import { Container } from "./index"

describe("Should render Container component", () => {
	it("Should render component", () => {
		render(<Container data-testid="eer0"></Container>)
		expect(screen.getByTestId("eer0")).toBeInTheDocument()
	})

	it("Should render component with children", () => {
		render(<Container data-testid="eer0">I children</Container>)
		expect(screen.getByText(/i children/i)).toBeInTheDocument()
	})
})
