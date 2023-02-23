import { render } from "@test-utils"
import "@testing-library/jest-dom"

import { Button } from "./Button"

describe("should render component", () => {
	it("Should default render", () => {
		const { getByText } = render(<Button>BUTTON</Button>)
		const text = getByText(/button/i)
		expect(text).toBeInTheDocument()
	})
})
