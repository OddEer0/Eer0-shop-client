import "@testing-library/jest-dom"

import { render, screen } from "@/shared/utils/test"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<button></button>)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})
})
