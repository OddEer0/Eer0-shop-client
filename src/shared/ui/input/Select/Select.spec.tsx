import { render, screen } from "@test-utils"
import "@testing-library/jest-dom"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<button></button>)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})
})
