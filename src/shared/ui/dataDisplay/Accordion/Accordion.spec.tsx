import { render, screen } from "@test-utils"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { Accordion } from "./Accordion"

describe("Should render component", () => {
	it("Should render component", () => {
		render(
			<Accordion>
				<Accordion.Summary text="first" endIcon={<span>test-icon</span>} defaultState={true}>
					<h2>text-test</h2>
				</Accordion.Summary>
				<Accordion.Summary text="second" endIcon={<span>test-icon</span>}>
					<h2>text-test</h2>
				</Accordion.Summary>
				<Accordion.Summary text="third" endIcon={<span>test-icon</span>}>
					<h2>text-test</h2>
				</Accordion.Summary>
			</Accordion>
		)
		expect(screen.getByText(/text-test/i)).toBeInTheDocument()
	})
})

describe("Accordion events", () => {
	it("Standard mode event", async () => {
		render(
			<Accordion>
				<Accordion.Summary text="first" endIcon={<span>test-icon</span>}>
					<h2>text-first</h2>
				</Accordion.Summary>
				<Accordion.Summary text="second" endIcon={<span>test-icon</span>}>
					<h2>text-second</h2>
				</Accordion.Summary>
				<Accordion.Summary text="third" endIcon={<span>test-icon</span>}>
					<h2>text-third</h2>
				</Accordion.Summary>
			</Accordion>
		)
		expect(screen.queryByText(/text-first/i)).not.toBeInTheDocument()
		expect(screen.queryByText(/text-second/i)).not.toBeInTheDocument()
		expect(screen.queryByText(/text-third/i)).not.toBeInTheDocument()
		const firstSummary = screen.getByText(/first/i)
		const secondSummary = screen.getByText(/second/i)
		await userEvent.click(firstSummary)
		expect(screen.getByText(/text-first/i)).toBeInTheDocument()
		await userEvent.click(secondSummary)
		expect(screen.getByText(/text-second/i)).toBeInTheDocument()
		await userEvent.click(secondSummary)
		setTimeout(() => {
			expect(screen.queryByText(/text-second/i)).not.toBeInTheDocument()
		}, 1000)
	})
})
