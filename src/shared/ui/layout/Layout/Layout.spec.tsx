import { Layout } from "."
import "@testing-library/jest-dom"

import { render, screen } from "@/shared/utils/test"

describe("Should render component", () => {
	it("Should render component", () => {
		render(
			<Layout>
				<Layout.Header>header</Layout.Header>
				<Layout.Aside>aside</Layout.Aside>
				<Layout.Content>content</Layout.Content>
				<Layout.Footer>footer</Layout.Footer>
			</Layout>
		)
		expect(screen.getByText(/header/i)).toBeInTheDocument()
		expect(screen.getByText(/aside/i)).toBeInTheDocument()
		expect(screen.getByText(/content/i)).toBeInTheDocument()
		expect(screen.getByText(/footer/i)).toBeInTheDocument()
	})
})
